document.addEventListener("DOMContentLoaded", () => {
  const profile = JSON.parse(localStorage.getItem("userProfile"));

  if (profile && typeof profile.name === "string") {
    const usernameDisplay = document.getElementById("#usernameDisplay");

  }

  if (usernameDisplay) {

usernameDisplay.textContent = profile.name;

  }
});
