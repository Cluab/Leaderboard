import './style.css';
import Addleader from './modules/add.js';
import Post from './modules/post.js';
import Get from './modules/get.js';
//  imported css to link with html using stylelint-config-standard
// imported required functions from modules folder
const body = document.querySelector('body');
const button = document.getElementById('submit');
const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');
const reload = document.getElementById('refresh');
document.addEventListener('DOMContentLoaded', Addleader);

// added event listener to button
button.addEventListener('click', (event) => {
  if (inputName.value === '' || inputScore === '') return;
  event.preventDefault();
  const name = inputName.value;
  const score = inputScore.value;
  Post.addSomethingAsync(name, score);
  const list = new Addleader(name, score);
  Addleader.addToList(list);

  // rest the input to be empty
  inputName.value = '';
  inputScore.value = '';
});

reload.addEventListener('click', (event) => {
  event.preventDefault();
  Get.getscores();
});

body.onload = () => {
  Get.getscores();
};
