/* XP */
document.addEventListener("DOMContentLoaded", () => {
  const profile = JSON.parse(localStorage.getItem("userProfile"));
  if (profile && typeof profile.xp === "number") {
    const xp = profile.xp;
    const maxXp = 100;
    const percentage = (xp / maxXp) * 100;

    const xpBar = document.getElementById("xp-bar");
    const xpTest = document.getElementById("xp-text");

    xpBar.style.width = `${percentage}%`;
    xpText.textContent = `${xp} / ${maxXP} XP`;
  }
});
