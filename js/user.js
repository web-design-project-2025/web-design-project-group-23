document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    const userProfile = {
      name: username,
      password: password,
      level: 1,
      xp: 0,
    };

    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    alert("Login succesful!");
    window.location.href = "index.html";
  });
});
