export default class addleader {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  // created the add function to html document
  static addToList = (list) => {
    const ul = document.querySelector('.board');
    const li = document.createElement('li');
    console.log(list);
    li.innerText = `${list.name}:${list.score}`;
    ul.appendChild(li);
  };
}
