import './style.css';
import Addleader from './modules/add.js';
//  imported css to link with html using stylelint-config-standard
// imported required functions from modules folder

const button = document.getElementById('submit');
const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');
document.addEventListener('DOMContentLoaded', Addleader);

// added event listener to button
button.addEventListener('click', (event) => {
  if (inputName.value === '' || inputScore === '') return;
  event.preventDefault();
  const name = inputName.value;
  const score = inputScore.value;
  const list = new Addleader(name, score);
  Addleader.addToList(list);

  // rest the input to be empty
  inputName.value = '';
  inputScore.value = '';
});
