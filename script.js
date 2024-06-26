const timer = document.getElementById('timer');
const button = document.getElementById('button');
const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const second = document.getElementById('second');

button.addEventListener('click', () => {

    const date = new Date();

    const inputYear = parseInt(year.value);
    const inputMonth = parseInt(month.value);
    const inputDay = day.value;
    const inputHour = parseInt(hour.value);
    const inputSecond = parseInt(second.value);


    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentDay = date.getDate();
    const currentHour = date.getHours();
    const currentSecond = date.getSeconds();

    if (!isNaN(inputYear) && !isNaN(inputMonth) 
        && !isNaN(inputDay) && !isNaN(inputHour) 
        && !isNaN(inputSecond)) {
        const timeYears = inputYear - currentYear;
        const timeMonth = inputMonth - currentMonth;
        const timeDay = inputDay - currentDay;
        const timeHour = inputHour - currentHour;
        const timeSecond = inputSecond - currentSecond;

        if(timeYears < 0) {

            timer.textContent = "Invalid input";

        } else if (timeMonth <= 0 && timeDay > inputDay) {

            timer.textContent = `Time remaining: 
                                ${timeYears - 1} year(s), 
                                ${10 - Math.abs(timeMonth)} month(s), 
                                ${Math.abs(timeDay)} day(s), 
                                ${timeHour} hour(s), 
                                ${timeSecond} second(s).`;
        } else if(timeMonth <= 0 && timeDay < inputDay) {
            timer.textContent = `Time remaining: 
                                ${timeYears - 1} year(s), 
                                ${10 - Math.abs(timeMonth)} month(s), 
                                ${parseFloat(inputDay) + parseFloat(Math.abs(timeDay)) - 30} day(s), 
                                ${timeHour} hour(s), 
                                ${timeSecond} second(s).`;
        } else {
            timer.textContent = `Time remaining: 
                                ${timeYears} year(s), 
                                ${timeMonth} month(s), 
                                ${timeDay} day(s), 
                                ${timeHour} hour(s), 
                                ${timeSecond} second(s).`;
        }
    } else {
        timer.textContent = "Invalid input";
    }
});
