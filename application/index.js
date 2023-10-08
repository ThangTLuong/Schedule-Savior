import { createColorBox } from './src/components/time-interval';
import { button } from './src/components/button';
import { textBar } from './src/components/text-bar';
import { canvas } from './src/components/canvas';

document.addEventListener('DOMContentLoaded', function() {
  const scheduler = document.getElementById('scheduler');

  const textBars = textBar(scheduler);
  const buttons = button(scheduler);

  const container = document.createElement('div');
  container.setAttribute('id', 'main-container');

  container.appendChild(textBars);
  container.appendChild(buttons);

  scheduler.appendChild(container);

  canvas(scheduler);
  // button.addEventListener('click', function() {
  //   var userInput = inputElement.value;

  //   fetch('http://localhost:5000/test', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(userInput)
  //   })
  //   .then((response) => {
  //     return response.text();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // });
});

// document.addEventListener('DOMContentLoaded', function () {
//   const container = document.getElementById('container');

//   for (let i = 0; i < 10; i++) {
//     createColorBox(container)
//   }
// })
