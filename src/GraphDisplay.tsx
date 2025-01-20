import { useRef } from "react";
import { Graph } from "./Graph";
import { Step } from "./steps";

export const GraphDisplay = ({ step }: { step: Step }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const copyToClipboard = async () => {
    if (!svgRef.current) return;
    const svgContent = svgRef.current.outerHTML;
    await navigator.clipboard.writeText(svgContent);
  };

  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid black",
      }}
    >
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="565px"
        height="310px"
        style={{ border: "solid black 1px" }}
      >
        <Graph step={step} />
      </svg>
      <br />
      <button onClick={copyToClipboard}>copy</button>
    </div>
  );
};
