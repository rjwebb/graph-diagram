import { useRef } from "react";
import { Graph } from "./Graph";
import { Step } from "./steps";

export const GraphDisplay = ({ step }: { step: Step }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const copyToClipboard = async () => {
    if (!svgRef.current) return;
    const svgContent = svgRef.current.outerHTML;
    await navigator.clipboard.writeText(svgContent);

    const element = document.createElement("a");
    const file = new Blob([svgContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${step.name}.svg`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
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
