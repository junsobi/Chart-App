import { tickCallback } from "./tickCallback";
import { ScaleOptions } from "chart.js";

export const scales: {
  x: ScaleOptions<"time">;
  "y-axis-area": ScaleOptions<"linear">;
  "y-axis-bar": ScaleOptions<"linear">;
} = {
  x: {
    type: "time",
    offset: false,
    time: {
      unit: "minute",
    },
    ticks: {
      autoSkip: true,
      maxTicksLimit: 20,
      maxRotation: 0,
      callback: tickCallback,
    },
  },
  "y-axis-area": {
    type: "linear",
    position: "left",
    min: 0,
    max: 200,
  },
  "y-axis-bar": {
    type: "linear",
    position: "right",
    min: 0,
    max: 20000,
  },
};
