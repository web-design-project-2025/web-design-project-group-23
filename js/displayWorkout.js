const displayWorkoutElements = document.querySelectorAll(".displayWorkout");
const rawWorkoutData = localStorage.getItem("workoutData");


if (rawWorkoutData) {
  const workouts = JSON.parse(rawWorkoutData); 

  displayWorkoutElements.forEach((container) => {

    const startButton = document.createElement("button");
    startButton.textContent = "Start Workout";
    startButton.classList.add("start-button");
    container.appendChild(startButton);

    startButton.addEventListener("click", () => {
      let sessionIndex = 0; 
      let exerciseIndex = 0; 

      container.innerHTML = ""; 

      const showExercise = () => {
        container.innerHTML = ""; 

        const session = workouts[sessionIndex]; 
        const exercise = JSON.parse(session[exerciseIndex]); 

        const exerciseDiv = document.createElement("div");
        exerciseDiv.classList.add("exercise-entry");
        exerciseDiv.innerHTML = `
          <h3 class="dw">Workout Session ${sessionIndex + 1}</h3>
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

            container.innerHTML = `<p class="dw">Workout session ${sessionIndex + 1} complete!</p>`;
          }
        });


        container.appendChild(exerciseDiv);
        container.appendChild(nextButton);
      };


      showExercise();
    });
  });
} else {

  displayWorkoutElements.forEach((container) => {
    container.innerHTML = "<p class='dw'>No workouts saved yet.</p>";
  });
}
