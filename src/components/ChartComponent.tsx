import React, { useEffect, useRef, useContext } from "react";
import { createChart } from "./createChart";
import { updateChart } from "./updateChart";
import { Chart, registerables } from "chart.js";
import { SelectedIdContext } from "../contexts/selectedIdContext";
import { useHighlight } from "../hooks/useHighlight";
import useOnClick from "../hooks/useOnClick";
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
  const onClickHandler = useOnClick(chartRef, data);

  useEffect(() => {
    if (canvasRef.current && data) {
      const ctx = canvasRef.current.getContext("2d");

      if (ctx) {
        if (chartRef.current) {
          updateChart(chartRef.current, data);
        } else {
          chartRef.current = createChart(ctx, data);

          if (chartRef.current) {
            chartRef.current.options.onClick = onClickHandler;
          }
        }
      }
    }
  }, [data, onClickHandler]);

  useHighlight(chartRef, data, selectedButton);

  return <canvas ref={canvasRef}></canvas>;
};

export default ChartComponent;
