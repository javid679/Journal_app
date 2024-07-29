import { showForm, cancelForm } from './modules/form.js';
//import { initializeModal } from './modules/modal.js';

document.addEventListener("DOMContentLoaded", () => {
  cancelForm();
  //initializeModal();
  document.querySelector(".journalButtons").addEventListener("click", (event) => {
    if (event.target.classList.contains("addEntry")) {
      showForm();
    }
  });
});
