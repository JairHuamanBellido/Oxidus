import * as d3 from "d3";
import { RefObject } from "react";
import { IDragEvent, ILink, INodes, SVG } from "./graph.interface";

export class GraphController {
  private _svg: SVG;
  private _nodes: INodes[];
  private _links: ILink[];
  private _CIRCLE_RADIUS: number = 10;

  private _refContainer: RefObject<HTMLDivElement>;
  private _zoom: d3.ZoomBehavior<any, any>;

  constructor(
    id: string,
    nodes: INodes[],
    links: ILink[],
    ref: RefObject<HTMLDivElement>,
  ) {
    this._svg = d3
      .select(id)
      .append("svg")
      .attr("id", "graph-container")
      .attr("viewBox", [
        0,
        0,
        ref.current?.clientWidth || 100,
        ref.current?.clientHeight || 100,
      ])
      .attr("width", "100%")
      .attr("height", "100%");

    this._nodes = nodes;
    this._links = links;
    this._refContainer = ref;

    this._zoom = d3
      .zoom<any, any>()
      .scaleExtent([1, 8])
      .on("zoom", (e) => {
        const { transform } = e;
        d3.selectAll("g")
          .attr("transform", transform)
          .attr("stoke-width", 1 / transform.k);
      });
  }

  private createSimulation() {
    const width = this._refContainer.current?.clientWidth ?? 0;
    const height = this._refContainer.current?.clientHeight ?? 0;

    return d3
      .forceSimulation(this._nodes)
      .force(
        "link",
        d3.forceLink<INodes, ILink>(this._links).id((d) => d.id),
      )
      .force(
        "charge",
        d3
          .forceManyBody<INodes>()
          .strength((d) => {
            return -this._CIRCLE_RADIUS * 100;
          })
          .distanceMax(8000),
      )
      .force("center", d3.forceCenter(width / 2, height / 2));
  }

  private appendLinks() {
    const appendedLinks = this._svg
      .append("g")
      .attr("class", "link")
      .attr("stroke", "hsl(var(--foreground))")
      .attr("stroke-opacity", 0.2)
      .selectAll()
      .data(this._links)
      .join("line")
      .attr("class", "z-10")
      .attr("id", (val) => `link-${val.index}`);

    return { appendedLinks };
  }

  private appendNodes(simulation: d3.Simulation<INodes, undefined>) {
    const appendedNodes = this._svg
      .append("g")
      .attr("class", "node cursor-pointer ")
      .selectAll()
      .data(this._nodes)
      .join("circle")
      .attr("r", () => {
        return this._CIRCLE_RADIUS;
      })
      .attr("data-group", (d) => {
        return d.groupId || "";
      })
      .attr("data-main-node", (d) => {
        return d.main ? "true" : "false";
      })
      .attr("fill", (d) => {
        if (d.main) {
          return "hsl(var(--primary)";
        }
        return "hsl(var(--foreground))";
      })

      .attr("id", (val) => `node-${val.id}`)
      .attr("name", (d) => d.id)
      .on("mouseover", (_, d) => {
        this._links
          .filter(
            (value) =>
              (value.source as INodes).id === d.id ||
              (value.target as INodes).id === d.id,
          )
          .forEach((val) => {
            this._svg
              .selectAll(`circle[id=node-${(val.source as INodes).id}]`)
              .attr("filter", "drop-shadow(0px 0px 10px hsl(var(--primary))");
            this._svg
              .selectAll(`circle[id=node-${(val.target as INodes).id}]`)
              .attr("filter", "drop-shadow(0px 0px 10px hsl(var(--primary))");
            this._svg
              .selectAll(`line[id=link-${val.index}]`)
              .attr("stroke-opacity", 1)
              .attr("stroke", "hsl(var(--primary))")
              .attr("stroke-dasharray", "4");
          });

        if (d.group) {
          this._svg
            .selectAll(`circle[data-group=${d.id}]`)
            .attr("filter", "drop-shadow(0px 0px 8px hsl(var(--foreground))");
        }
      })
      .on("mouseleave", (_, d) => {
        this._links
          .filter(
            (value) =>
              (value.source as INodes).id === d.id ||
              (value.target as INodes).id === d.id,
          )
          .forEach((val) => {
            this._svg
              .selectAll(`circle[id=node-${(val.source as INodes).id}]`)
              .attr("filter", "none");
            this._svg
              .selectAll(`circle[id=node-${(val.target as INodes).id}]`)
              .attr("filter", "none");

            this._svg
              .selectAll(`line[id=link-${val.index}]`)
              .attr("filter", "none")
              .attr("stroke", "hsl(var(--foreground))")
              .attr("stroke-opacity", 0.2)
              .attr("stroke-dasharray", 0);
          });
        if (d.group) {
          this._svg
            .selectAll(`circle[data-group=${d.id}]`)
            .attr("filter", "none");
        }
      });

    appendedNodes.append("title").text((d) => d.id);

    // Enable Drag
    this.enableDrag(appendedNodes, simulation);

    return { appendedNodes };
  }
  private enableDrag(
    appendedNodes: d3.Selection<
      SVGCircleElement | null,
      INodes,
      SVGGElement,
      unknown
    >,
    simulation: d3.Simulation<INodes, undefined>,
  ) {
    appendedNodes.call(
      d3
        .drag<any, INodes>()
        .on("start", (e: IDragEvent) => {
          if (!e.active) simulation.alphaTarget(0.3).restart();

          e.subject.fx = e.subject.x;
          e.subject.fy = e.subject.y;
        })
        .on("drag", (e: IDragEvent) => {
          e.subject.fx = e.x;
          e.subject.fy = e.y;
        })
        .on("end", (e: IDragEvent) => {
          if (!e.active) simulation.alphaTarget(0);
          e.subject.fx = null;
          e.subject.fy = null;
        }),
    );
  }

  private appendTexts() {
    const appendedTexts = this._svg
      .append("g")
      .attr("class", "text")
      .selectAll()
      .data(this._nodes)
      .join("text")
      .attr("fill", "hsl(var(--foreground))")
      .attr("font-size", "0.8rem")
      .text((val) => {
        return val.name ?? "";
      });

    return { appendedTexts };
  }

  private addSimulationTick(simulation: d3.Simulation<INodes, undefined>) {
    if (!this._refContainer.current) {
      return;
    }

    const { appendedNodes } = this.appendNodes(simulation);
    const { appendedLinks } = this.appendLinks();
    const { appendedTexts } = this.appendTexts();

    simulation.on("tick", () => {
      appendedNodes.attr("cx", (d) => d.x ?? 0).attr("cy", (d) => d.y ?? 0);

      appendedLinks
        .attr("x1", (d) => {
          const node = d.source as INodes;

          return node.x ?? 0;
        })
        .attr("y1", (d) => {
          const node = d.source as INodes;

          return node.y ?? 0;
        })
        .attr("x2", (d) => {
          const node = d.target as INodes;
          return node.x ?? 0;
        })
        .attr("y2", (d) => {
          const node = d.target as INodes;
          return node.y ?? 0;
        });
      appendedTexts
        .attr(
          "x",
          (d) => (d.x ?? 0) - this._CIRCLE_RADIUS - this._CIRCLE_RADIUS / 2,
        )
        .attr("y", (d) => (d.y ?? 0) + this._CIRCLE_RADIUS + 20);
    });
  }

  private removeNodes() {
    this._svg.select(".node").remove();
    this._svg.select(".node-stroke").remove();
  }

  private removeTexts() {
    this._svg.select(".text").remove();
  }
  private removeLinks() {
    this._svg.select(".link").remove();
  }

  private updateViewwBox() {
    this._svg.attr("viewBox", [
      0,
      0,

      this._refContainer.current?.clientWidth || 0,
      this._refContainer.current?.clientHeight || 0,
    ]);
  }
  public display() {
    const simulation = this.createSimulation();

    // Clean the canvas
    this.removeLinks();
    this.removeNodes();
    this.removeTexts();

    this.addSimulationTick(simulation);
    this.updateViewwBox();
    this._svg.call(this._zoom);
  }
}
