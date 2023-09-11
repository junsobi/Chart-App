import React, { useEffect, useRef } from "react";
import { createChart, updateChart } from "./chartFunctions";
import { Chart, registerables } from "chart.js";
import { ChartDataType } from "../types/api.types";
import "chartjs-adapter-date-fns";

interface ChartComponentProps {
  data: ChartDataType;
}

Chart.register(...registerables);

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<null | ReturnType<typeof createChart>>(null);

  useEffect(() => {
    if (canvasRef.current && data) {
      const ctx = canvasRef.current.getContext("2d");

      if (ctx) {
        if (chartRef.current) {
          updateChart(chartRef.current, data);
        } else {
          chartRef.current = createChart(ctx, data);
        }
      }
    }
  }, [data]);

  return <canvas ref={canvasRef}></canvas>;
};

export default ChartComponent;
