export function button(scheduler) {
  const goBack = createButton('go-back', '⬅️');
  const submit = createButton('submit', '➡️');
  const clear = createButton('clear', '❌');

  const goBackContainer = document.createElement('div');
  goBackContainer.setAttribute('id', 'go-back-container');
  goBackContainer.appendChild(goBack);
  
  scheduler.appendChild(goBackContainer);

  const bundle = document.createElement('div');
  bundle.setAttribute('id', 'submit-clear-container');
  
  bundle.appendChild(submit);
  bundle.appendChild(clear);

  return bundle;
}

function createButton(name, symbol) {
  const button = document.createElement('button');

  button.setAttribute('id', name);
  button.textContent = symbol;

  return button;
}