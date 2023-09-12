import React, { useEffect, useRef, useContext } from "react";
import { createChart } from "./chartFunctions";
import { updateChart } from "./updateChart";
import { Chart, registerables } from "chart.js";
import { SelectedIdContext } from "../contexts/selectedIdContext";
import { useHighlight } from "../hooks/useHighlight";
import { ChartDataType } from "../types/api.types";
import "chartjs-adapter-date-fns";
import annotationPlugin from "chartjs-plugin-annotation";

interface ChartComponentProps {
  data: ChartDataType;
}

Chart.register(...registerables, annotationPlugin);

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<null | ReturnType<typeof createChart>>(null);

  const { selectedButton } = useContext(SelectedIdContext);

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

  useHighlight(chartRef, data, selectedButton);

  return <canvas ref={canvasRef}></canvas>;
};

export default ChartComponent;
