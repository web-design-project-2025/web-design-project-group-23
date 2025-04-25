async function loadWorkouts() {
  try {
    const response = await fetch("/exercises.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const exercises = await response.json();
    console.log("Loaded workouts:", exercises);
    return exercises;
  } catch (error) {
    console.error("Failed to load workouts:", error);
    return [];
  }
}

async function loadExercises() {
  try {
    const response = await fetch("/exercises.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const exercises = await response.json();
    console.log("Loaded workouts:", exercises);

    let i = 0;
    let select = document.getElementById("exerciseList");

    array.forEach((exercise) => {
      let option = document.createElement("option");
      option.value = exercise.name;
      option.textContent = exercise.name;
      select.appendChild(option);
    });
    return exercises;
  } catch (error) {
    console.error("Failed to load workouts:", error);
    return [];
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadExercises();
});
