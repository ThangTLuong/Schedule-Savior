document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('input-button');
  var inputElement = document.getElementById('name');

  button.addEventListener('click', function() {
    var userInput = inputElement.value;

    fetch('http://localhost:5000/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInput)
    })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  });
});