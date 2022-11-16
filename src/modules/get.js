import { URl } from './post.js';
import Addleader from './add.js';
// imported required functions and verbals from modules folder
const userdatails = document.querySelector('.board');
export default class Get {
  static getscores = async () => {
    // awaits execution until the returned promise is fulfilled or rejected.
    await fetch(URl, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        userdatails.innerHTML = '';
        return data.result.forEach((el) => {
          Addleader.addToList(el);
        });
      });
  };
}
