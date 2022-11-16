import { URl } from './post.js';
import Addleader from './add.js';

const userdatails = document.querySelector('.board');
export default class Get {
  static getscores = async () => {
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
