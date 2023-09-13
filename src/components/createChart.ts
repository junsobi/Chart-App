import { Chart } from "chart.js";
import "chartjs-plugin-annotation";
import { createDatasets } from "../utils/createDatasets";
import { scales } from "../utils/scales";
import { title, beforeBody, label } from "../utils/tooltipCallbacks";
import { createAnnotations } from "../utils/createAnnotation";
import { ChartDataType, CustomChartConfiguration } from "../types/api.types";
import "moment-timezone";

export function createChart(
  ctx: CanvasRenderingContext2D,
  data: ChartDataType
): Chart {
  const config: CustomChartConfiguration = {
    type: "line",
    data: {
      labels: data.timeArray,
      datasets: createDatasets(data.areaArray, data.barArray),
    },
    options: {
      scales,
      plugins: {
        tooltip: {
          mode: "index",
          intersect: false,
          callbacks: {
            title,
            beforeBody: (contexts) => beforeBody(contexts, data),
            label,
          },
        },
        annotation: createAnnotations(),
      },
    },
  };
  return new Chart(ctx, config);
}
