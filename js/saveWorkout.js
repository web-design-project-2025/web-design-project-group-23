document.addEventListener('DOMContentLoaded', () => {

    const confirmButton = document.getElementById('confirmButton');
    
    confirmButton.addEventListener('click', () => {
    
    const exercise = document.getElementById('exerciseList').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    const weight = document.getElementById('weight').value;
    const duration = document.getElementById('duration').value;
    
    const workoutData = {
    
    exercise,
    sets,
    weight,
    duration
    
    };
    
    localStorage.setItem('workoutData', JSON.stringify(workoutData));

    });
    
    });