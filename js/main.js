// Calendar
const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

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
    for (let i = 1; i <= totalDays; i++){
        const date = new Date(currentYear, currentMonth, i);
    // the following line of code was adapted by the help of: https://chatgpt.com/share/680f6a47-4740-800b-a612-e8aa6d3de150 
        const dateStr = date.toISOString().split('T')[0];
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class="date ${activeClass}" data-date="${dateStr}">${i}</div>`;
    }

    // Next month's dates
    for(let i = 1; i <= lastDayIndex; i++){
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class = "date inactive"> ${nextDate.getDate()}</div>`;
    }
    datesElement.innerHTML = datesHTML;
}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1 );
    updateCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1 );
    updateCalendar();
});

updateCalendar();