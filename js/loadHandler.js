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
