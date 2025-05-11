// Planner Page

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedDate = urlParams.get('date');
  console.log("Date recieved in planner:", selectedDate);
  const dateDisplay = document.getElementById("selectedDate");

  if (dateDisplay && selectedDate){
    dateDisplay.textContent = `Workout: ${selectedDate}`;
  }

  const confirmButton = document.getElementById("confirmButton");

  confirmButton.addEventListener("click", () => {
    const exercises = document.querySelectorAll(".exerciseList");
    let workout = [];

    exercises.forEach((el, i) => {
      workout.push({
        exercise: el.value,
        sets: document.querySelectorAll(".sets")[i].value,
        reps: document.querySelectorAll(".reps")[i].value,
        weight: document.querySelectorAll(".weight")[i].value,
        duration: document.querySelectorAll(".duration")[i].value
      });
    });


    if (!selectedDate){
      alert("No date found.");
      return;
    }


    let allData = JSON.parse(localStorage.getItem("workoutData")) || {};
      allData[selectedDate] = workout;
      localStorage.setItem("workoutData", JSON.stringify(allData));
      alert("Workout Saved!")
      window.location.href = "calendar.html";
  });
});
