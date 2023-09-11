import { MockData, ResponseData } from "../types/api.types";

export function convertResponseData(
  data: MockData
): Array<ResponseData & { time: string }> {
  return Object.entries(data.response).map(([time, value]) => ({
    ...value,
    time,
  }));
}
