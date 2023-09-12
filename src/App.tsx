import ChartComponents from "./components/ChartComponent";
import { useConvertedData } from "./hooks/useConvertedData";
import UniqueItemsButtons from "./components/UniqueItemsButtons";
import LoadingComponent from "./components/LoadingComponent";

function App() {
  const chartData = useConvertedData();
  const uniqueIds = chartData ? Array.from(new Set(chartData.idArray)) : [];

  return (
    <div className="flex items-center justify-center">
      <div className="w-5/6">
        {chartData ? (
          <>
            <UniqueItemsButtons ids={uniqueIds} />
            <ChartComponents data={chartData} />
          </>
        ) : (
          <LoadingComponent />
        )}
      </div>
    </div>
  );
}

export default App;
