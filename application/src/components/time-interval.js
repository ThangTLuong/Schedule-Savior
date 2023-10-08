
export function createColorBox(container) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('colorBox');
  colorBox.style.backgroundColor = 'red';

  container.appendChild(colorBox);
}

function toggleColor(colorBox) {
  const currentColor = colorBox.style.backgroundColor;
  const newColor = currentColor === 'red' ? 'green' : 'red';
  colorBox.style.backgroundColor = newColor;
}
