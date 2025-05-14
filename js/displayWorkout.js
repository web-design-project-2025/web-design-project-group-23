// Workout Page
const displayWorkoutElements = document.querySelectorAll(".displayWorkout");
const rawWorkoutData = localStorage.getItem("workoutData");

const urlParams = new URLSearchParams(window.location.search);
const selectedDate = urlParams.get("date");
console.log("Date recieved in planner:", selectedDate);

if (rawWorkoutData && selectedDate) {
  const workoutsData = JSON.parse(rawWorkoutData);
  const session = workoutsData[selectedDate];

  if (session && session.length > 0) {
    displayWorkoutElements.forEach((container) => {
      const startButton = document.createElement("button");
      startButton.textContent = "Start Workout";
      startButton.classList.add("start-button");
      container.appendChild(startButton);

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove Workout";
      removeButton.classList.add("remove-button");
      container.appendChild(removeButton);

      removeButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to remove your workout?")) {
          const rawData = localStorage.getItem("workoutData");
          const allData = JSON.parse(rawData);
          delete allData[selectedDate];
          localStorage.setItem("workoutData", JSON.stringify(allData));

          window.location.href = "calendar.html";
        }
      });

      startButton.addEventListener("click", () => {
        let exerciseIndex = 0;
        container.innerHTML = "";

        const showExercise = () => {
          container.innerHTML = "";

          const exercise = session[exerciseIndex];

          const exerciseDiv = document.createElement("div");
          exerciseDiv.classList.add("exercise-entry");
          exerciseDiv.innerHTML = `
          <h3 class="dw">Workout Session</h3>
          <p class="dw">Exercise: ${exercise.exercise}</p>
          <p class="dw">Sets: ${exercise.sets}</p>
          <p class="dw">Weight: ${exercise.weight} kg</p>
          <p class="dw">Duration: ${exercise.duration} min</p>
        `;

          const nextButton = document.createElement("button");
          nextButton.textContent = "Next Exercise";
          nextButton.classList.add("next-button");

          nextButton.addEventListener("click", () => {
            exerciseIndex++;
            if (exerciseIndex < session.length) {
              showExercise();
            } else {
              container.innerHTML = `<p class="dw">Workout completed!✅</p>`;

              const profile = JSON.parse(localStorage.getItem("userProfile"));
              if (profile) {
                profile.xp += 50;
                if (profile.xp >= 100) {
                  profile.xp = 0;
                }
                localStorage.setItem("userProfile", JSON.stringify(profile));
              }
            }
          });
          container.appendChild(exerciseDiv);
          container.appendChild(nextButton);
        };
        showExercise();
      });
    });
  } else {
    // If ther is no workout session for the selected date
    displayWorkoutElements.forEach((container) => {
      container.innerHTML = `
      <p class='dw'>No workouts saved this date.</p>`;
    });
  }
} else {
  // If there is no data from LocalStorage on the selected date
  displayWorkoutElements.forEach((container) => {
    container.innerHTML = `
    <p class='dw'>No workout data found.</p>
    <button class='goCalendar'>Go to the Calendar</button>`;

    const goButton = container.querySelector(".goCalendar");
    goButton.addEventListener("click", () =>{
      window.location.href = "calendar.html";
    });
  });
}
