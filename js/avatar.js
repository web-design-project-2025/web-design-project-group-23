function updateAvatar() {
  const avatar = document.getElementById("profileAvatar");
  const storedProfile = localStorage.getItem("userProfile");

  if (!storedProfile || !avatar) return;

  const userProfile = JSON.parse(storedProfile);
  const userLvl = parseInt(userProfile.level) || 1;

  let avatarSrc;

  if (userLvl >= 5) {
    avatarSrc = "avatars/lvl5.png";
  } else if (userLvl >= 4) {
    avatarSrc = "avatars/lvl4.png";
  } else if (userLvl >= 3) {
    avatarSrc = "avatars/lvl3.png";
  } else if (userLvl >= 2) {
    avatarSrc = "avatars/lvl2.png";
  } else {
    avatarSrc = "avatars/lvl1.png";
  }

  avatar.src = avatarSrc;
}

document.addEventListener("DOMContentLoaded", updateAvatar);
