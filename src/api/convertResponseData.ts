import { MockData } from "../types/api.types";

export function convertResponseData(data: MockData) {
  const timeArray = Object.keys(data.response);
  const areaArray = Object.values(data.response).map(
    (item: any) => item.value_area
  );
  const barArray = Object.values(data.response).map(
    (item: any) => item.value_bar
  );

  return { timeArray, areaArray, barArray };
}
