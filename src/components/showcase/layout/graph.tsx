import { useEffect, useRef, useState } from "react";
import { GraphController } from "./graph/graph-controller";
import { mock_data } from "./graph/data";
import TypographyH3 from "../../typography/h3";
import TypographyParagraph from "../../typography/paragraph";

const { characters, relationships } = mock_data;

export default function GraphContainer() {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<GraphController | null>(null);

  useEffect(() => {
    if (!ref || !ref.current || !characters.length) {
      return;
    }

    setSvg(
      new GraphController("#board-container", characters, relationships, ref),
    );

    return () => document.getElementById("graph-container")?.remove();
  }, [characters, relationships, ref]);

  useEffect(() => {
    if (!svg) return;

    svg.display();
  }, [svg]);

  return (
    <div
      className="w-full h-full relative bg-[radial-gradient(circle_at_50%_50%,var(--tw-gradient-stops))] 
                from-primary/10 from-10% 
                to-background to-95%"
    >
      <div
        ref={ref}
        id="board-container"
        className="w-full h-full relative "
      ></div>
      <div className="absolute top-10 left-10  w-[300px] rounded h-fit bg-background/5 backdrop-blur-xl text-foreground px-8 pt-4 pb-8">
        <TypographyH3>List</TypographyH3>
        <div className="space-y-2 mt-8">
          {characters.map((character) => (
            <TypographyParagraph key={`list-${character.id}`}>
              {character.name}
            </TypographyParagraph>
          ))}
        </div>
      </div>
    </div>
  );
}
