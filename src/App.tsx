import "./App.css";

function App() {
  const nodeRadius = 20;
  const linePadding = 5 + nodeRadius;
  const nodes = [
    {
      x: 60,
      y: 150,
      label: "A",
      branch: 0,
      clock: 0,
    },
    {
      x: 200,
      y: 150,
      label: "B",
    },
  ];

  const edges: { from: string; to: string }[] = [
    // edges
    { from: "A", to: "B" },
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
              x={node.x + 20}
              y={node.y - 20}
              fontFamily="Arial, sans-serif"
              fontSize="14"
              fill="black"
            >
              branch: {node.clock}
            </text>
            <text
              key={`clock-${i}`}
              x={node.x + 20}
              y={node.y - 40}
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

          let x1, y1, x2, y2;
          // special cases
          if (dx === 0) {
            // vertical line
            x1 = fromNode.x;
            x2 = toNode.x;

            if (fromNode.y > toNode.y) {
              y1 = fromNode.y - linePadding;
              y2 = toNode.y + linePadding;
            } else {
              y1 = fromNode.y + linePadding;
              y2 = toNode.y - linePadding;
            }
          } else if (dy === 0) {
            // horizontal line
            y1 = fromNode.y;
            y2 = toNode.y;
            if (fromNode.x > toNode.x) {
              x1 = fromNode.x - linePadding;
              x2 = toNode.x + linePadding;
            } else {
              x1 = fromNode.x + linePadding;
              x2 = toNode.x - linePadding;
            }
          } else {
            // diagonal line
            const gradient = dy / dx;
            x1 = fromNode.x + nodeRadius * (1 / gradient);
            y1 = fromNode.y + nodeRadius * gradient;
            x2 = toNode.x - nodeRadius * (1 / gradient);
            y2 = toNode.y - nodeRadius * gradient;
          }

          // return a line
          return (
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="black"
              strokeWidth="4"
            />
          );
        })}
      </svg>
    </>
  );
}

export default App;
