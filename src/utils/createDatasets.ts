import { ChartDataset } from "chart.js";

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
      borderColor: "#014e60",
      backgroundColor: "rgba(1,78,96,0.5)",
      tension: 0.4,
    },
    {
      type: "bar",
      label: "value_bar",
      data: barData,
      yAxisID: "y-axis-bar",
      barPercentage: 1.0,
      categoryPercentage: 1.0,
      backgroundColor: "#ffbfab",
    },
  ];
}
