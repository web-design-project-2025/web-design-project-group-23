async function loadLoginData() {
  try {
    const response = await fetch("/login.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Failed to load login data:", error);
    return [];
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("form");

  loginButton.addEventListener("click", async function (e) {
    e.preventDefault();

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    const users = await loadLoginData();

    const isValidUser = users.some(
      (user) =>
        user.username === usernameInput && user.password === passwordInput
    );

    if (isValidUser) {
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password");
    }
  });
});
