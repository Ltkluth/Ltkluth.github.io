/* .js files add interaction to your website */
var letterbox = document.getElementById('letterbox');
var message = document.getElementById('message');
var button = document.getElementById('enter');
var button2 = document.getElementById('restart-button');

// if statement makes it so that the code only gets the buttons if they exist. They dont exist on the about page so that causes error.
if (button) {
button.addEventListener('click', display);
  }
if (button2) {
button2.addEventListener('click', restart);
  }

function display (){
  console.log('hi');
  var what = document.getElementById('what').value;
  var how = document.getElementById('how').value;
  var when = document.getElementById('when').value;
  var name = document.getElementById('name').value;

// adds new text to message
  message.innerHTML = 'Dear nature, <br> thank you for ' + what +' by ' + how +' ' + when + '.' + '<br> From ' + name;
}

function restart (){
// removes text from message
  message.innerHTML = '';
}





