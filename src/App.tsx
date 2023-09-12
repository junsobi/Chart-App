import ChartComponents from "./components/ChartComponent";
import { useConvertedData } from "./hooks/useConvertedData";
import UniqueItemsButtons from "./components/UniqueItemsButtons";
import LoadingComponent from "./components/LoadingComponent";
import { SelectedIdProvider } from "./contexts/selectedIdContext";
import ChartLayout from "./layouts/ChartLayout";

function App() {
  const chartData = useConvertedData();
  const uniqueIds = chartData ? Array.from(new Set(chartData.idArray)) : [];

  return (
    <SelectedIdProvider>
      <ChartLayout>
        {chartData ? (
          <>
            <UniqueItemsButtons ids={uniqueIds} />
            <ChartComponents data={chartData} />
          </>
        ) : (
          <LoadingComponent />
        )}
      </ChartLayout>
    </SelectedIdProvider>
  );
}

export default App;
