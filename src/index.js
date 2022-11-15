import './style.css';
import addleader from './modules/add';

const button = document.getElementById('submit');
const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');
document.addEventListener('DOMContentLoaded', addleader);
button.addEventListener('click', (event) => {
  event.preventDefault();
  const name = inputName.value;
  const score = inputScore.value;
  const list = new addleader(name, score);
  console.log (list)
  addleader.addToList(list);
  // empty's the value of the input
  //   document.querySelector('name').value = '';
  //   document.querySelector('score').value = '';
});
