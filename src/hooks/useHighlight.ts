import { createChart } from "../components/chartFunctions";
import { useEffect } from "react";
import { ChartDataType } from "../types/api.types";
import {
  LINE_COLOR,
  LINE_HIGHLIGHT_COLOR,
  BAR_COLOR,
  BAR_HIGHLIGHT_COLOR,
} from "../constants/colorConstants";

export const useHighlight = (
  chartRef: React.MutableRefObject<null | ReturnType<typeof createChart>>,
  data: ChartDataType,
  selectedButton: string | null
) => {
  useEffect(() => {
    if (chartRef.current && data.idArray) {
      const { datasets } = chartRef.current.data;

      if (datasets[0].type === "line") {
        const matchingIndices = selectedButton
          ? data.idArray.reduce((acc: number[], curr, idx) => {
              if (curr === selectedButton) acc.push(idx);
              return acc;
            }, [])
          : [];

        datasets[0].pointBackgroundColor = datasets[0].data.map(
          (_, idx) =>
            matchingIndices.includes(idx) ? LINE_HIGHLIGHT_COLOR : LINE_COLOR // Use the color constants here.
        );
      }

      if (datasets[1] && datasets[1].type === "bar") {
        const matchingIndices = selectedButton
          ? data.idArray.reduce((acc: number[], curr, idx) => {
              if (curr === selectedButton) acc.push(idx);
              return acc;
            }, [])
          : [];

        datasets[1].backgroundColor = datasets[1].data.map(
          (_, idx) =>
            matchingIndices.includes(idx) ? BAR_HIGHLIGHT_COLOR : BAR_COLOR // Use the color constants here.
        );
      }

      chartRef.current.update();
    }
  }, [chartRef, data, selectedButton]);
};
