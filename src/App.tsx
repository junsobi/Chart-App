import ChartComponents from "./components/ChartComponent";
import { useConvertedData } from "./hooks/useConvertedData";

function App() {
  const chartData = useConvertedData();

  return (
    <div className="flex items-center justify-center">
      <div className="w-5/6">
        {chartData ? <ChartComponents data={chartData} /> : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
