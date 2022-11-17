export default class Addleader {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  // created the add function to html document
  static addToList = (list) => {
    const ul = document.querySelector('.board');
    const li = document.createElement('li');
    const name = document.createElement('p');
    const score = document.createElement('p');
    name.innerText = `${list.user}`;
    score.innerText = `${list.score}`;
    li.appendChild(name);
    li.appendChild(score);
    ul.appendChild(li);
  };
}
