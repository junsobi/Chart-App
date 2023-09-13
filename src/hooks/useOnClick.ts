import { useContext } from "react";
import { Chart, ActiveElement, ChartEvent } from "chart.js";
import { SelectedIdContext } from "../contexts/selectedIdContext";
import { ChartDataType } from "../types/api.types";

const useOnClick = (
  chartRef: React.MutableRefObject<Chart | null>,
  data: ChartDataType
) => {
  const { setSelectedButton } = useContext(SelectedIdContext);

  return (event: ChartEvent, elements: ActiveElement[], chart: Chart) => {
    if (chartRef.current && event.native instanceof Event) {
      const element = chartRef.current.getElementsAtEventForMode(
        event.native,
        "nearest",
        { intersect: true },
        true
      );

      if (element.length > 0 && Array.isArray(data.idArray)) {
        const index = element[0].index;

        setSelectedButton((prevSelectedButton) => {
          if (data.idArray[index] === prevSelectedButton) {
            return null;
          }

          return data.idArray[index];
        });
      }
    }
  };
};

export default useOnClick;
