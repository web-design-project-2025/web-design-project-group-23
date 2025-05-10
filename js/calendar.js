// Calendar Page
// The following lines was adapted from: https://www.youtube.com/watch?v=OcncrLyddAs
const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');
const closePopup = document.getElementById('closePopup');

let currentDate = new Date();
let selectedDate = null;


const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const savedWorkouts = JSON.parse(localStorage.getItem("workoutData")) || {}; 

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});
    monthYearElement.textContent = monthYearString;
    
    let datesHTML = '';

    // Past month dates
    for (let i = firstDayIndex - 1; i >= 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, - i);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }

    // Current month dates
    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        // The following line of code was asapted from: https://chatgpt.com/c/68189962-8d2c-800b-8538-afb057a0dfa7
        const dateStr = date.toISOString().split('T')[0];  // Removes TIME from the ISO format.

        const isToday = date.toDateString() === new Date().toDateString();
        const isPlanned = savedWorkouts[dateStr] && savedWorkouts[dateStr].length > 0;

        const classes = ['date'];
        if (isToday) classes.push('active');
        if (isPlanned) classes.push('planned');

datesHTML += `<div class="${classes.join(' ')}" data-date="${dateStr}">${i}</div>`;
    }

    // Next month's dates
    for(let i = 1; i <= lastDayIndex; i++){
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class = "date inactive"> ${nextDate.getDate()}</div>`;
    }
    datesElement.innerHTML = datesHTML;
    
    const dateElements = datesElement.querySelectorAll('.date:not(.inactive)');

    // Pop up window
    const addExerciseBtn = document.getElementById("addExerciseBtn");

    dateElements.forEach(dateEl => {
        dateEl.addEventListener('click', () => {
            selectedDate = dateEl.getAttribute('data-date');
            popupText.textContent = `${selectedDate}`;
            popup.classList.remove('hidden');
        });
    });
    
    addExerciseBtn.addEventListener("click", () => {
        if (selectedDate){
            window.location.href = `planner.html?date=${selectedDate}`;
        }
    });
}

// Navigation buttons on the calendar for months
prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1 );
    updateCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1 );
    updateCalendar();
});

// Close popup
closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
});

updateCalendar();