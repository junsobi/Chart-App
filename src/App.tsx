import React, { useEffect, useState } from "react";
import { fetchMockData } from "./api/api";
import ChartComponents from "./components/ChartComponent";
import { MockData } from "./types/api.types";

function App() {
  const [data, setData] = useState<MockData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMockData();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return <ChartComponents data={data} />;
}

export default App;
