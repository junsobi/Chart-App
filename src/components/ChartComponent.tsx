import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import { MockData, ResponseData } from "../types/api.types";
import { convertResponseData } from "../api/convertResponseData";

interface ChartProps {
  data: MockData;
}

const ChartComponents: React.FC<ChartProps> = ({ data }) => {
  const [convertedData, setConvertedData] = useState<
    (ResponseData & { time: string })[]
  >([]);

  useEffect(() => {
    setConvertedData(convertResponseData(data));
  }, [data]);

  return (
    <LineChart width={500} height={300} data={convertedData}>
      <XAxis dataKey="time" />
      <YAxis />
      <Line type="monotone" dataKey="value_area" stroke="#8884d8" />
      <Line type="monotone" dataKey="value_bar" stroke="#82ca9d" />
    </LineChart>
  );
};

export default ChartComponents;
