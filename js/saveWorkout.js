document.addEventListener("DOMContentLoaded", () => {
  const confirmButton = document.getElementById("confirmButton");

  confirmButton.addEventListener("click", () => {
    const exercises = document.querySelectorAll(".exerciseList");
    let workout = [];

    for (let i = 0; i < exercises.length; i++) {
      const exercise = document.querySelectorAll(".exerciseList")[i].value;
      const sets = document.querySelectorAll(".sets")[i].value;
      const reps = document.querySelectorAll(".reps")[i].value;
      const weight = document.querySelectorAll(".weight")[i].value;
      const duration = document.querySelectorAll(".duration")[i].value;

      const workoutData = {
        exercise,
        sets,
        weight,
        duration,
      };

      workout.push(JSON.stringify(workoutData));
    }
    let wData = [];
    if (localStorage.getItem("workoutData") != null) {
      wData = JSON.parse(localStorage.getItem("workoutData"));
    }
    wData.push(workout);

    localStorage.setItem("workoutData", JSON.stringify(wData));
  });
});
