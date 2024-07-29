export function createElement(elementName, elementClass = "", elementId = "") {
  const element = document.createElement(elementName);
  if (elementClass) element.classList.add(elementClass);
  if (elementId) element.id = elementId;
  return element;
}

export function getCurrentDate() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(now.getDate()).padStart(2, "0")}`;
}

export function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-");
  return `${day}-${month}-${year}`;
}

