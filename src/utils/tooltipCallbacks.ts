import moment from "moment";
import { ChartDataType } from "../types/api.types";
import { TooltipItem } from "chart.js";

export function title(contexts: TooltipItem<"line" | "bar">[]) {
  let dateStr = contexts[0].label;
  let dateObj = moment(dateStr, "MMM D, YYYY, h:mm:ss a");

  let formattedDate = dateObj
    .tz("Asia/Seoul")
    .format("YYYY년 MM월 DD일 A hh시 mm분 ss초");

  return "날짜 : " + formattedDate;
}

export function beforeBody(
  contexts: TooltipItem<"line" | "bar">[],
  data: ChartDataType
) {
  return "id : " + data.idArray[contexts[0].dataIndex];
}

export function label(context: TooltipItem<"line" | "bar">) {
  var label = context.dataset.label || "";

  if (label === "value_area") {
    label = "value_Area";
  } else if (label === "value_bar") {
    label = "value_Bar";
  }

  if (label) {
    label += ": ";
  }

  return [label + context.parsed.y];
}
