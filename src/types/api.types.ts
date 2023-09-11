export interface ResponseData {
  id: string;
  value_area: number;
  value_bar: number;
}

export interface MockData {
  type: string;
  version: number;
  response: Record<string, ResponseData>;
}
