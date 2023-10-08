export function canvas(scheduler) {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'canvas');
  scheduler.appendChild(canvas);
}