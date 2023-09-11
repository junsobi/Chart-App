import { Chart, ChartConfiguration } from "chart.js";

interface ChartDataType {
  timeArray: Array<string>;
  areaArray: Array<number>;
  barArray: Array<number>;
}

export function createChart(
  ctx: CanvasRenderingContext2D,
  data: ChartDataType
): Chart {
  const config: ChartConfiguration = {
    type: "line",
    data: {
      labels: data.timeArray,
      datasets: [
        {
          label: "value_area",
          data: data.areaArray,
          yAxisID: "y-axis-area",
          fill: false,
          borderColor: "blue",
        },
        {
          label: "value_bar",
          data: data.barArray,
          yAxisID: "y-axis-bar",
          fill: false,
          borderColor: "red",
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: "time",
          time: {
            unit: "second",
          },
        },
        "y-axis-area": {
          type: "linear",
          position: "left",
        },
        "y-axis-bar": {
          type: "linear",
          position: "right",
        },
      },
    },
  };

  return new Chart(ctx, config);
}

export function updateChart(
  chartInstance: Chart,
  newData: ChartDataType
): void {
  chartInstance.data.labels = newData.timeArray as unknown as string[];
  chartInstance.data.datasets[0].data = newData.areaArray;
  chartInstance.data.datasets[1].data = newData.barArray;
  chartInstance.update();
}
