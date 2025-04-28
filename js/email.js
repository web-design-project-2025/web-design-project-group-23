document.addEventListener("DOMContentLoaded", function () {
  const editBtn = document.getElementById("edit-email-btn");
  const saveBtn = document.getElementById("save-email.btn");
  const emailEdit = document.getElementById("email-edit");
  const currentEmail = document.getElementById("current-email");
  const newEmailInput = document.getElementById("new-email");

  const savedEmail = localStorage.getItem("userEmail");
  if (savedeEmail) {
    currentEmail.textContent = savedEmail;
  }

  editBtn.addEventListener("click", () => {
    emailEdit.style.display = "block";
    newEmailInput.focus();
  });

  saveBtn.addEventListener("click", () => {
    const newEmail = newEmailInput.value.trim();
    if (newEmail) {
      currentEmail.textContent = newEmail;
      emailEdit.style.display = "none";
      newEmailInput.value = "";

      localStorage.setItem("");
    }
  });
});
