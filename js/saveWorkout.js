document.addEventListener('DOMContentLoaded', () => {

    const confirmButton = document.getElementById('confirmButton');
    
    confirmButton.addEventListener('click', () => {
    
    const exercise = document.querySelector('.exerciseList').value;
    const sets = document.querySelector('.sets').value;
    const reps = document.querySelector('.reps').value;
    const weight = document.querySelector('.weight').value;
    const duration = document.querySelector('.duration').value;
    
    const workoutData = {
    
    exercise,
    sets,
    weight,
    duration
    
    };
    
    localStorage.setItem('workoutData', JSON.stringify(workoutData));

    });
    
    });