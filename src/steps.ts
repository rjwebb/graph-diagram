export type Step = {
  startX: number;
  startY: number;
  nodes: {
    x: number;
    y: number;
    label: string;
    branch: number;
    clock: number;
  }[];
  edges: { from: string; to: string }[];
  highlightedNode?: string;
};

export const step1: Step = {
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
