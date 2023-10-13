export function timesheet(scheduler) {
  const timesheetContainer = document.createElement('div');
  timesheetContainer.setAttribute('id', 'timesheet-container');

  scheduler.appendChild(timesheetContainer);
}