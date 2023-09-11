import { useEffect, useState } from "react";
import { fetchMockData } from "../api/api";
import { convertResponseData } from "../api/convertResponseData";
import { ChartDataType } from "../types/api.types";

export function useConvertedData() {
  const [chartData, setChartData] = useState<ChartDataType | null>(null);

  useEffect(() => {
    async function fetchDataAndConvert() {
      try {
        const fetchedData = await fetchMockData();
        const convertedData = convertResponseData(fetchedData);
        setChartData(convertedData);
      } catch (error) {
        console.error(`Error fetching and converting data: ${error}`);
      }
    }

    fetchDataAndConvert();
  }, []);

  return chartData;
}
