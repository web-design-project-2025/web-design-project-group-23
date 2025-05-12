/*Avatar fro the Profile */

let userXP = localStorage.getItem("userXP");

if (!userXp) {
  userXP = 0;
} else {
  userXp = parseInt(userXP);
}

function updateAvatar() {
  const avatar = document.getElementById("profileAvatar");

  if (userXP >= 1000) {
    avatar.src = "avatars/lvl5.png";
  } else if (userXP >= 600) {
    avatar.src = "avatars/lvl4.png";
  } else if (userXP >= 300) {
    avatar.src = "avatars/lvl3.png";
  } else if (userXp >= 100) {
    avatar.src = "avatars/lvl2.png";
  } else {
    avatar.src = "avatars/lvl1.png";
  }
}

updateAvatar();

function addXP() {
  userXP += 10;
  localStorage.setItem("userXP", userXP);
  updateAvatar();
}

addXP();
