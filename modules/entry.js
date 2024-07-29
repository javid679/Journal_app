import { createElement, formatDate } from './utils.js';
import { cancelForm, output, imagesArray } from './form.js';  // Import imagesArray from form.js

const recentEntries = document.querySelector(".entries");
const entryNum = document.querySelector(".totalEntries");
let entryCount = 0;

export function submitEntry() {
  const titleField = document.querySelector("#titleField");
  const textField = document.querySelector("#txtArea");
  const datePicker = document.querySelector("#datePicker");

  if (!titleField.value && !textField.value) {
    alert("Please enter your journal entry");
    return;
  }

  const entryDiv = createElement("div", "entry", "entry");

  if (titleField.value) {
    const entryTitle = createElement("h3", "entryTitle", "entryTitle");
    entryTitle.textContent = titleField.value;
    entryDiv.appendChild(entryTitle);
  }

  const entryContent = createElement("p", "content", "content");
  entryContent.textContent = textField.value;

  const entryDate = createElement("p", "entryDate", "entryDate");
  entryDate.textContent = formatDate(datePicker.value);

  const deleteBtn = createElement("button", "delete-entry-btn");
  deleteBtn.textContent = "Delete Entry";
  deleteBtn.addEventListener("click", () => {
    entryDiv.remove();
    entryCount--;
    entryNum.textContent = `Total Entries: ${entryCount}`;
  });

  if (imagesArray.length > 0) {
    const imagesGrid = createElement("div", "images-grid");
    imagesArray.forEach((image) => {
      const imageDiv = createElement("div", "image");
      const img = createElement("img");
      img.src = URL.createObjectURL(image);
      img.alt = "image";
      imageDiv.append(img);
      imagesGrid.appendChild(imageDiv);
    });
    entryDiv.append(imagesGrid);
  }

  entryDiv.append(entryContent, entryDate, deleteBtn);
  recentEntries.appendChild(entryDiv);

  entryCount++;
  entryNum.textContent = `Total Entries: ${entryCount}`;

  cancelForm();  // Call the imported cancelForm function
  imagesArray.length = 0; // Clear the imagesArray
  output.innerHTML = "";
}
