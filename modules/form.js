import { createElement, getCurrentDate } from './utils.js';
import { submitEntry } from './entry.js';

//declaring variables
const journalButtons = document.querySelector(".journalButtons");
export const output = document.createElement("output");
export let imagesArray = [];

//function to show forms
export function showForm() {
  journalButtons.innerHTML = "";

//creating a title field
  const titleField = createElement("textarea", "titleField", "titleField");
  titleField.rows = 2;
  titleField.cols = 80;
  titleField.placeholder = "Title of your entry..";

//creating a text field
  const textField = createElement("textarea", "txtArea", "txtArea");
  textField.rows = 20;
  textField.cols = 80;
  textField.placeholder = "Enter your entry here...";

//date selection field
  const dateLabel = createElement("label", "", "datePickerLabel");
  dateLabel.htmlFor = "datePicker";
  dateLabel.textContent = "Select a date:";

  //date picking field
  const datePicker = createElement("input", "datePicker", "datePicker");
  datePicker.type = "date";
  datePicker.value = getCurrentDate();

  //image label
  const imageLabel = createElement("label", "", "imageLabel");
  imageLabel.htmlFor = "imageUpload";
  imageLabel.textContent = "Select files:";

// image upload button
  const imageUpload = createElement("input", "imageUpload", "imageUpload");
  imageUpload.type = "file";
  imageUpload.multiple = true;
  imageUpload.accept = "image/*, video/*";
  imageUpload.addEventListener("change", () => showImg(imageUpload));

  //cancel button
  const cancelBtn = createElement("button", "cancel-btn", "cancel-btn");
  cancelBtn.textContent = "Cancel Entry";
  cancelBtn.addEventListener("click", cancelForm);

  //submit button
  const submitBtn = createElement("button", "submit-btn", "submit-btn");
  submitBtn.textContent = "Submit Entry";
  submitBtn.addEventListener("click", submitEntry);

  //appending everything
  journalButtons.append(
    titleField,
    textField,
    imageLabel,
    imageUpload,
    output,
    dateLabel,
    datePicker,
    submitBtn,
    cancelBtn
  );
}

//cancel form function
export function cancelForm() {
  journalButtons.innerHTML = "";
  const addEntryBtn = createElement("button", "addEntry", "addEntry");
  addEntryBtn.textContent = "+Add a new entry";
  addEntryBtn.addEventListener("click", showForm);
  journalButtons.appendChild(addEntryBtn);
}

//showing image
function showImg(input) {
  const files = Array.from(input.files);
  imagesArray.push(...files);
  displayImages();
}

//displaying images
function displayImages() {
  output.innerHTML = imagesArray
    .map(
      (image, index) => `
    <div class="image">
      <img src="${URL.createObjectURL(image)}" alt="image">
      <span class="delete-image" data-index="${index}">&times;</span>
    </div>`
    )
    .join("");

  document.querySelectorAll('.delete-image').forEach(span => {
    span.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      deleteImage(index);
    });
  });
}

//delete image function
function deleteImage(index) {
  imagesArray.splice(index, 1);
  displayImages();
}


