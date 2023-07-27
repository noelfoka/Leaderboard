import createScore, { score } from './display.js';

const btn = document.getElementById('scoreBtn');

const Addnew = () => {
  const newname = document.getElementById('name');
  const newscore = document.getElementById('score');
  const nameInput = newname.value;
  const scoreInput = newscore.value;
  if (nameInput !== '' && scoreInput !== '') {
    score.addscore(nameInput, scoreInput);
    createScore();
    newname.value = '';
    newscore.value = '';
  }
};

btn.addEventListener('click', Addnew);

export default Addnew;