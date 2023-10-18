import { createColorBox } from './src/components/time-interval';
import { button } from './src/components/button';
import { textBar } from './src/components/text-bar';
import { timesheet } from './src/components/timesheet';

document.addEventListener('DOMContentLoaded', () => {
  const scheduler = document.getElementById('scheduler');

  generateElements(scheduler);
  generateTimesheet();
});

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('submit')

  button.addEventListener('click', () => {
    const timesheets = document.querySelectorAll('#timesheet');

    timesheets.forEach((timesheet) => {
      const timeboxes = timesheet.querySelectorAll('#colorBox');
      const timeArray = [];

      const selectedTimeboxes = Array.from(timeboxes).filter((timebox) => {
        const computedStyle = getComputedStyle(timebox);
        return computedStyle.backgroundColor === 'rgb(255, 120, 125)';
      });

      selectedTimeboxes.forEach((timebox) => {
        const timeData = timebox.dataset.time;

        timeArray.push(timeData);
      });

      if (timeArray.length !== 0) console.log(`${timesheet.dataset.day}: `, timeArray);
    });

    
  });
});

function generateElements(scheduler) {
  const textBars = textBar(scheduler);
  const buttons = button(scheduler);

  const container = document.createElement('div');
  container.setAttribute('id', 'main-container');

  container.appendChild(textBars);
  container.appendChild(buttons);

  scheduler.appendChild(container);

  timesheet(scheduler);
}

function generateTimesheet() {
  const timesheetContainer = document.getElementById('timesheet-container');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  createColorBox(timesheetContainer, 'timeslot');
  createColorBox(timesheetContainer, 'day');
  createColorBox(timesheetContainer, 'timesheets');

  const timesheets = document.getElementById('timesheets');
  days.forEach((day) => {
    const timesheet = createColorBox(timesheets, 'timesheet');
    timesheet.dataset.day = day;
  });

  const eachSheet = document.querySelectorAll('#timesheet');
  const startTime = new Date();
  startTime.setHours(7, 0, 0, 0);

  eachSheet.forEach((timesheet) => {
    for (let i = 0; i < 48; i++) {
      const timeBox = createColorBox(timesheet, 'colorBox');
      const time = new Date(startTime.getTime() + i * 15 * 60 * 1000); 
      const hours = time.getHours().toString().padStart(2, '0');
      const minutes = time.getMinutes().toString().padStart(2, '0');

      timeBox.dataset.time = `${hours}:${minutes}`;
    }
  });
}
