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
  startX: 150,
  startY: 150,
  nodes: [
    {
      x: 0,
      y: 0,
      label: "A",
      branch: 0,
      clock: 0,
    },
  ],
  edges: [
    // edges
  ],
  highlightedNode: "A",
};

export const step2: Step = {
  startX: 150,
  startY: 150,
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
  ],
  edges: [
    // edges
    { from: "A", to: "B" },
  ],
  highlightedNode: "B",
};

export const step3: Step = {
  startX: 110,
  startY: 150,
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
  ],
  edges: [
    // edges
    { from: "A", to: "B" },
    { from: "B", to: "C" },
  ],
  highlightedNode: "C",
};

export const step4: Step = {
  startX: 110,
  startY: 120,
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
  ],
  edges: [
    // edges
    { from: "A", to: "B" },
    { from: "B", to: "C" },
    { from: "A", to: "D" },
  ],
  highlightedNode: "D",
};

export const step5: Step = {
  startX: 110,
  startY: 120,
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
  ],
  edges: [
    // edges
    { from: "A", to: "B" },
    { from: "B", to: "C" },
    { from: "A", to: "D" },
    { from: "D", to: "E" },
    { from: "B", to: "E" },
  ],
  highlightedNode: "E",
};

export const step6: Step = {
  startX: 30,
  startY: 120,
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
  ],
  edges: [
    // edges
    { from: "A", to: "B" },
    { from: "B", to: "C" },
    { from: "A", to: "D" },
    { from: "D", to: "E" },
    { from: "B", to: "E" },
    { from: "E", to: "F" },
  ],
  highlightedNode: "F",
};

export const step7: Step = {
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
