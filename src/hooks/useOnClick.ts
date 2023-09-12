import { useCallback } from "react";
import { Chart, ActiveElement, ChartEvent } from "chart.js";
import { ChartDataType } from "../types/api.types";

const useOnClick = (
  chartRef: React.MutableRefObject<Chart | null>,
  setSelectedButton: (value: string) => void,
  data: ChartDataType
) => {
  return useCallback(
    (event: ChartEvent, elements: ActiveElement[], chart: Chart) => {
      if (chartRef.current && event.native instanceof Event) {
        const element = chartRef.current.getElementsAtEventForMode(
          event.native,
          "nearest",
          { intersect: true },
          true
        );

        if (element.length > 0 && Array.isArray(data.idArray)) {
          const index = element[0].index;
          console.log(index);
          setSelectedButton(data.idArray[index]);
        }
      }
    },
    [chartRef, setSelectedButton, data]
  );
};

export default useOnClick;
