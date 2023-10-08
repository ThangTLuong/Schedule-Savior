export function textBar() {
  const firstNameTextBar = createTextBar('firstname', 'First name');
  const lastNameTextBar = createTextBar('lastname', 'Last name');

  const bundle = document.createElement('div');
  bundle.setAttribute('id', 'first-last-name-container');

  bundle.appendChild(firstNameTextBar);
  bundle.appendChild(lastNameTextBar);

  return bundle;
}

function createTextBar(name, placeholder) {
  const textBar = document.createElement('input')

  textBar.setAttribute('type', 'text');
  textBar.setAttribute('placeholder', placeholder);

  textBar.setAttribute('id', name);
  return textBar;
}