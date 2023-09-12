import ChartComponents from "./components/ChartComponent";
import { useConvertedData } from "./hooks/useConvertedData";
import UniqueItemsButtons from "./components/UniqueItemsButtons";
import LoadingComponent from "./components/LoadingComponent";
import { SelectedIdProvider } from "./contexts/selectedIdContext";

function App() {
  const chartData = useConvertedData();
  const uniqueIds = chartData ? Array.from(new Set(chartData.idArray)) : [];

  return (
    <SelectedIdProvider>
      <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
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
    </SelectedIdProvider>
  );
}

export default App;
