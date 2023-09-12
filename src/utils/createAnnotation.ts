export function createAnnotations() {
  return {
    annotations: [
      {
        type: "box" as const,
        yScaleID: "y-axis-bar",
        yMin: 10000,
        yMax: 20000,
        backgroundColor: "rgba(255,204,204,0.2)",
      },
      {
        type: "box" as const,
        yScaleID: "y-axis-area",
        yMin: 0,
        yMax: 100,
        backgroundColor: "rgba(173,216,230,0.2)",
      },
    ],
  };
}
