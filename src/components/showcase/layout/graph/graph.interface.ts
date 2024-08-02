import * as d3 from "d3";

export interface IExtraDragEvents extends d3.SubjectPosition {
  fx: number | null;
  fy: number | null;
}
export interface IDragEvent
  extends d3.D3DragEvent<any, INodes, IExtraDragEvents> {}

export interface ILink extends d3.SimulationLinkDatum<INodes> {
  location?: string;
}

export interface INodes extends d3.SimulationNodeDatum {
  id: string;
  name?: string;
  lastname?: string;
  age?: number | string;
  gender?: string;
  nationality?: string;
  main?: boolean;
  group?: boolean;
  groupId?: string;
}

export type SVG = d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
