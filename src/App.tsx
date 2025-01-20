import "./App.css";
import { GraphDisplay } from "./GraphDisplay";

import { step1, step2, step3, step4, step5, step6, step7 } from "./steps";

const allSteps = [step1, step2, step3, step4, step5, step6, step7];

function App() {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      {allSteps.map((step, i) => (
        <GraphDisplay key={i} step={step} />
      ))}
    </div>
  );
}

export default App;
