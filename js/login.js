/* Demo user*/

const users = [{ username: "erik.svensson", password: "erika" }];

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.querySelector('input[type="password"]').value;

      const foundUser = users.find((user) => user.username === username);

      if (!foundUser) {
        alert("Wrong username or password.");
      } else if (foundUser.password === password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "index.html";
      } else {
        alert("Incorrect password or username");
      }
    });
  }
});
