document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');

  const button = document.createElement('button');
  button.setAttribute('id', 'next');
  button.setAttribute('href', 'insert.html')

  button.addEventListener('click', () => {
    ipcRenderer.navigateToPage('insert.html');
  });

  menu.appendChild(button);
});
