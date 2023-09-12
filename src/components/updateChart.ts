import { Chart } from "chart.js";
import { ChartDataType } from "../types/api.types";

export function updateChart(
  chartInstance: Chart,
  newData: ChartDataType
): void {
  chartInstance.data.labels = newData.timeArray as unknown as string[];
  chartInstance.data.datasets[0].data = newData.areaArray;
  chartInstance.data.datasets[1].data = newData.barArray;
  chartInstance.update();
}
