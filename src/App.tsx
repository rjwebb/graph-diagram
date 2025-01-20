import "./App.css";

const step1 = {
  startX: 30,
  startY: 70,
  nodes: [
    {
      x: 0,
      y: 0,
      label: "A",
      branch: 0,
      clock: 0,
    },
    {
      x: 1,
      y: 0,
      label: "B",
      clock: 1,
      branch: 0,
    },
    {
      x: 2,
      y: 0,
      label: "C",
      clock: 2,
      branch: 0,
    },
    {
      x: 1,
      y: 1,
      label: "D",
      clock: 1,
      branch: 1,
    },
    {
      x: 2,
      y: 1,
      label: "E",
      clock: 2,
      branch: 1,
    },
    {
      x: 3,
      y: 1,
      label: "F",
      clock: 3,
      branch: 1,
    },
    {
      x: 3,
      y: 2,
      label: "G",
      clock: 3,
      branch: 2,
    },
  ],

  edges: [
    // edges
    { from: "A", to: "B" },
    { from: "B", to: "C" },
    { from: "A", to: "D" },
    { from: "D", to: "E" },
    { from: "B", to: "E" },
    { from: "E", to: "F" },
    { from: "C", to: "G" },
    { from: "E", to: "G" },
  ],
  highlightedNode: "G",
};

function App() {
  const nodeRadius = 20;
  const linePadding = 8 + nodeRadius;
  const nodeXGap = 160;
  const nodeYGap = 100;
  const tagOffsetX = -20;
  const tagOffsetY = 30;
  const tagSpacingY = 20;

  const { nodes, highlightedNode, edges, startX, startY } = step1;

  const nodesByLabel = Object.fromEntries(
    nodes.map((node) => [node.label, node])
  );

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="565px"
        height="310px"
        style={{ border: "solid black 1px" }}
      >
        {nodes.map((node, i) => {
          const x = startX + node.x * nodeXGap;
          const y = startY + node.y * nodeYGap;
          return (
            <>
              {node.label === highlightedNode && (
                <rect
                  key={`highlight-${i}`}
                  x={x - 35}
                  y={y - 70}
                  fill="lightgreen"
                  width="80px"
                  height="100px"
                  rx="20px"
                />
              )}
              <circle
                key={`circle-${i}`}
                cx={x}
                cy={y}
                r={nodeRadius}
                fill="white"
                stroke="black"
                strokeWidth="3"
              />

              <text
                key={`label-${i}`}
                x={x}
                y={y}
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
                x={x + tagOffsetX}
                y={y - tagOffsetY}
                fontFamily="Arial, sans-serif"
                fontSize="14"
                fill="black"
              >
                branch: {node.branch}
              </text>
              <text
                key={`clock-${i}`}
                x={x + tagOffsetX}
                y={y - tagOffsetY - tagSpacingY}
                fontFamily="Arial, sans-serif"
                fontSize="14"
                fill="black"
              >
                clock: {node.clock}
              </text>
            </>
          );
        })}

        {edges.map(({ from, to }) => {
          const fromNode = nodesByLabel[from];
          const toNode = nodesByLabel[to];

          const x1 = startX + fromNode.x * nodeXGap;
          const y1 = startY + fromNode.y * nodeYGap;

          const x2 = startX + toNode.x * nodeXGap;
          const y2 = startY + toNode.y * nodeYGap;

          const dx = x2 - x1;
          const dy = y2 - y1;

          const angle = Math.atan2(dy, dx);
          const lineDx = Math.cos(angle) * linePadding;
          const lineDy = Math.sin(angle) * linePadding;

          // return a line
          return (
            <line
              x1={x1 + lineDx}
              y1={y1 + lineDy}
              x2={x2 - lineDx}
              y2={y2 - lineDy}
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
