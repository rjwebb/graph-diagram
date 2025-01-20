import "./App.css";

function App() {
  const nodeRadius = 20;
  const linePadding = 8 + nodeRadius;
  const nodeXGap = 160;
  const nodeYGap = 100;
  const startX = 30;
  const startY = 70;
  const tagOffsetX = -20;
  const tagOffsetY = 30;
  const tagSpacingY = 20;
  const nodes = [
    {
      x: startX,
      y: startY,
      label: "A",
      branch: 0,
      clock: 0,
    },
    {
      x: startX + nodeXGap,
      y: startY,
      label: "B",
      clock: 1,
      branch: 0,
    },
    {
      x: startX + nodeXGap * 2,
      y: startY,
      label: "C",
      clock: 2,
      branch: 0,
    },
    {
      x: startX + nodeXGap * 1,
      y: startY + nodeYGap,
      label: "D",
      clock: 1,
      branch: 1,
    },
    {
      x: startX + nodeXGap * 2,
      y: startY + nodeYGap,
      label: "E",
      clock: 2,
      branch: 1,
    },
    {
      x: startX + nodeXGap * 3,
      y: startY + nodeYGap,
      label: "F",
      clock: 3,
      branch: 1,
    },
    {
      x: startX + nodeXGap * 3,
      y: startY + nodeYGap * 2,
      label: "G",
      clock: 3,
      branch: 2,
    },
  ];

  const edges: { from: string; to: string }[] = [
    // edges
    { from: "A", to: "B" },
    { from: "B", to: "C" },
    { from: "A", to: "D" },
    { from: "D", to: "E" },
    { from: "B", to: "E" },
    { from: "E", to: "F" },
    { from: "C", to: "G" },
    { from: "E", to: "G" },
  ];

  const nodesByLabel = Object.fromEntries(
    nodes.map((node) => [node.label, node])
  );

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="600px"
        height="300px"
        style={{ border: "solid black 1px" }}
      >
        {nodes.map((node, i) => (
          <>
            <circle
              key={`circle-${i}`}
              cx={node.x}
              cy={node.y}
              r={nodeRadius}
              fill="white"
              stroke="black"
              strokeWidth="4"
            />

            <text
              key={`label-${i}`}
              x={node.x}
              y={node.y}
              fontFamily="Arial, sans-serif"
              fontSize="22"
              text-anchor="middle"
              dominant-baseline="central"
              fill="black"
            >
              {node.label}
            </text>

            <text
              key={`branch-${i}`}
              x={node.x + tagOffsetX}
              y={node.y - tagOffsetY}
              fontFamily="Arial, sans-serif"
              fontSize="14"
              fill="black"
            >
              branch: {node.clock}
            </text>
            <text
              key={`clock-${i}`}
              x={node.x + tagOffsetX}
              y={node.y - tagOffsetY - tagSpacingY}
              fontFamily="Arial, sans-serif"
              fontSize="14"
              fill="black"
            >
              clock: {node.clock}
            </text>
          </>
        ))}

        {edges.map(({ from, to }) => {
          const fromNode = nodesByLabel[from];
          const toNode = nodesByLabel[to];

          const dx = toNode.x - fromNode.x;
          const dy = toNode.y - fromNode.y;

          const angle = Math.atan2(dy, dx);
          const lineDx = Math.cos(angle) * linePadding;
          const lineDy = Math.sin(angle) * linePadding;

          // return a line
          return (
            <line
              x1={fromNode.x + lineDx}
              y1={fromNode.y + lineDy}
              x2={toNode.x - lineDx}
              y2={toNode.y - lineDy}
              stroke="black"
              strokeWidth="3"
            />
          );
        })}
      </svg>
    </>
  );
}

export default App;
