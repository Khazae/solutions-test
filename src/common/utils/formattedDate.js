export function formattedDate(payload) {
  if (typeof payload !== "string" || !payload.trim()) {
    return "Неверный формат даты";
  }

  const date = new Date(payload);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(date.getTime())) {
    return "Неверный формат даты";
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
