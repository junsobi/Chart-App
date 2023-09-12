export function tickCallback(
  value: number | string,
  index: number
): string | string[] {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let hours = date.getHours();

  let periodOfDay = hours >= 12 ? "오후" : "오전";

  if (hours > 12) {
    hours -= 12;
  }

  let minutes = date.getMinutes();

  let hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  let minutesStr = minutes < 10 ? `${minutes}` : `${minutes}`;

  return index === 0
    ? [
        `${periodOfDay} ${hoursStr}시 ${minutesStr}분 `,
        `${year}년 ${month}월 ${day}일`,
      ]
    : [`${hoursStr}시 ${minutesStr}분`];
}
