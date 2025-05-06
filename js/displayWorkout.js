const displayWorkoutElements = document.querySelectorAll(".displayWorkout");
const rawWorkoutData = localStorage.getItem("workoutData");

if (rawWorkoutData) {
  const workouts = JSON.parse(rawWorkoutData);

  workouts.forEach((session, sessionIndex) => {
    const sessionDiv = document.createElement("div");
    sessionDiv.classList.add("workout-session");
    sessionDiv.innerHTML = `<h3 class="dw">Workout Session ${
      sessionIndex + 1
    }</h3>`;

    session.forEach((exerciseStr, i) => {
      const exercise = JSON.parse(exerciseStr);
      const exerciseDiv = document.createElement("div");
      exerciseDiv.classList.add("exercise-entry");
      exerciseDiv.innerHTML = `
        <p class="dw">Exercise: ${exercise.exercise}</p>
        <p class="dw">Sets: ${exercise.sets}</p>
        <p class="dw">Weight: ${exercise.weight} kg</p>
        <p class="dw">Duration: ${exercise.duration} min</p>
      `;

      sessionDiv.appendChild(exerciseDiv);
    });

    displayWorkoutElements.forEach((container) =>
      container.appendChild(sessionDiv)
    );
  });
} else {
  displayWorkoutElements.forEach((container) => {
    container.innerHTML = "<p class=dw>No workouts saved yet.</p>";
  });
}
