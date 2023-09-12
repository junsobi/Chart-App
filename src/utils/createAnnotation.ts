import { TOP_BOX, BOTTOM_BOX } from "../constants/colorConstants";

export function createAnnotations() {
  return {
    annotations: [
      {
        type: "box" as const,
        yScaleID: "y-axis-bar",
        yMin: 10000,
        yMax: 20000,
        backgroundColor: TOP_BOX,
      },
      {
        type: "box" as const,
        yScaleID: "y-axis-area",
        yMin: 0,
        yMax: 100,
        backgroundColor: BOTTOM_BOX,
      },
    ],
  };
}
