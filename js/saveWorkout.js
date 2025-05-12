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
    const rows = document.querySelectorAll("tbody tr");
    const workout = [];

    rows.forEach((row) => {
        const exercise = row.querySelector(".exerciseList")?.value.trim();
        const sets = row.querySelector(".sets")?.value.trim();
        const reps = row.querySelector(".reps")?.value.trim();
        const weight = row.querySelector(".weight")?.value.trim();
        const duration = row.querySelector(".duration")?.value.trim();
      
      if (exercise || sets || reps || weight || duration){
        workout.push({exercise, sets, reps, weight, duration});
      }
      });
    

    if (!selectedDate){
      alert("No date found.");
      return;
    }

    if (workout.length === 0 || !workout[0].exercise){
      alert("No exercises to save.");
      return;
    }


    let allData = JSON.parse(localStorage.getItem("workoutData")) || {};
      const normalizedDate = new Date(selectedDate).toISOString().split("T")[0];
      allData[normalizedDate] = workout;  
      localStorage.setItem("workoutData", JSON.stringify(allData));
      console.log("Storage after saving:", JSON.parse(localStorage.getItem("workoutData")));
      alert("Workout Saved!")
      window.location.href = "calendar.html";
  });
});
