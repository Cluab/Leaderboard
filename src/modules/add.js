export default class Addleader {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  // created the add function to html document
  static addToList = (list) => {
    const ul = document.querySelector('.board');
    const li = document.createElement('li');
    li.innerText = `${list.user}:${list.score}`;
    ul.appendChild(li);
  };
}
