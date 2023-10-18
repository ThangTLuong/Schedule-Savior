var red = 'rgb(255, 120, 125)';
var blue = 'rgb(173, 216, 230)';

export function createColorBox(container, id) {
  const colorBox = document.createElement('div');
  colorBox.setAttribute('id', id);

  if (container.id === 'timesheet') {
    colorBox.style.backgroundColor = blue;

    let isClicked = false;

    colorBox.addEventListener('mousedown', () => {
      toggleColor(colorBox);
    });

    container.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isClicked = true;
    });

    container.addEventListener('mouseup', () => {
      isClicked = false;
    });

    colorBox.addEventListener('mouseover', () => {
      if (isClicked) toggleColor(colorBox);
    });
  }

  container.appendChild(colorBox);
  return colorBox;
}

function toggleColor(colorBox) {
  const currentColor = colorBox.style.backgroundColor;
  const newColor = currentColor === blue ? red : blue;
  colorBox.style.backgroundColor = newColor;
}

