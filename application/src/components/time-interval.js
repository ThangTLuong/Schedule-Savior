export function createColorBox(container, id) {
  const colorBox = document.createElement('div');
  colorBox.setAttribute('id', id);

  if (container !== 'timesheet') {
    colorBox.style.backgroundColor = 'rgb(173, 216, 230)';

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
}

function toggleColor(colorBox) {
  const currentColor = colorBox.style.backgroundColor;
  const newColor = currentColor === 'rgb(173, 216, 230)' ? 'rgb(144, 238, 144)' : 'rgb(173, 216, 230)';
  colorBox.style.backgroundColor = newColor;
}

