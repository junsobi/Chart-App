import { ChartConfiguration } from "chart.js";

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

export interface ChartDataType {
  timeArray: Array<string>;
  areaArray: Array<number>;
  barArray: Array<number>;
  idArray: Array<string>;
}

export interface Annotation {
  type: "box" | "line" | "verticalLine" | "horizontalLine" | "point";
  yScaleID?: string;
  yMin?: number;
  yMax?: number;
  backgroundColor?: string;
}

export interface AnnotationOptions {
  annotations: Annotation[];
}

export interface CustomChartConfiguration extends ChartConfiguration {
  options: ChartConfiguration["options"] & {
    plugins: {
      annotation: AnnotationOptions;
    };
  };
}
