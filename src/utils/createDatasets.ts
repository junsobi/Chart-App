import { ChartDataset } from "chart.js";
import {
  LINE_COLOR,
  BAR_COLOR,
  LINE_BACKGROUND,
} from "../constants/colorConstants";

export function createDatasets(
  areaData: number[],
  barData: number[]
): ChartDataset<"line" | "bar", number[]>[] {
  return [
    {
      type: "line",
      label: "value_area",
      data: areaData,
      yAxisID: "y-axis-area",
      fill: true,
      borderColor: LINE_COLOR,
      backgroundColor: LINE_BACKGROUND,
      tension: 0.4,
      pointBackgroundColor: areaData.map(() => LINE_COLOR),
    },
    {
      type: "bar",
      label: "value_bar",
      data: barData,
      yAxisID: "y-axis-bar",
      barPercentage: 1.0,
      categoryPercentage: 1.0,
      backgroundColor: BAR_COLOR,
    },
  ];
}
