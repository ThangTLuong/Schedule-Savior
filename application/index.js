import { createColorBox } from './src/components/time-interval';
import { button } from './src/components/button';
import { textBar } from './src/components/text-bar';
import { timesheet } from './src/components/timesheet';

document.addEventListener('DOMContentLoaded', function() {
  const scheduler = document.getElementById('scheduler');

  generateElements(scheduler);
  generateTimesheet();
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
  for (let i = 0; i < 5; i++){
    createColorBox(timesheetContainer, 'timesheet');
  }

  const timesheets = document.querySelectorAll('#timesheet');
  timesheets.forEach((timesheet) => {
    for (let i = 0; i < 52; i++) {
      createColorBox(timesheet, 'colorBox');
    }
  });
}