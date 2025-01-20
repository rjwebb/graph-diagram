import { useRef } from "react";
import "./App.css";
import { Graph } from "./Graph";
import { step7 } from "./steps";

function App() {
  const svgRef = useRef(null);

  const copyToClipboard = async () => {
    if (!svgRef.current) return;
    const svgContent = (svgRef.current as any).outerHTML;
    await navigator.clipboard.writeText(svgContent);
  };

  return (
    <>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="565px"
        height="310px"
        style={{ border: "solid black 1px" }}
      >
        <Graph step={step7} />
      </svg>
      <br />
      <button onClick={copyToClipboard}>...</button>
    </>
  );
}

export default App;
