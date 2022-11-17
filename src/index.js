import './style/header.scss';
import './style/add.scss';
import './style/list.scss';
import Icon from './images/background.jpeg';
import Addleader from './modules/add.js';
import Post from './modules/post.js';
import Get from './modules/get.js';
//  imported css to link with html using stylelint-config-standard
// imported required functions from modules folder
const body = document.querySelector('body');
const form = document.getElementById('form');
const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');
const reload = document.getElementById('refresh');
const title = document.querySelector('.title');
document.addEventListener('DOMContentLoaded', Addleader);

const myIcon = new Image();
myIcon.src = Icon;

// added event listener to button
form.addEventListener('submit', (event) => {
  let name = inputName.value;
  const score = inputScore.value;
  name = name.trim(name);
  if (name === '' || score === '') return;
  event.preventDefault();
  // Post.addSomethingAsync(name, score);
  const list = new Addleader(name, score);
  Addleader.addToList(list);

  // rest the input to be empty
  document.getElementById('form').reset();
});
// when clicked the leader board refreshes
reload.addEventListener('click', (event) => {
  event.preventDefault();
  Get.getscores();
});
// leader board refreshes on page load
body.onload = () => {
  Get.getscores();
};
