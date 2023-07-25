import createScore, { score } from './display.js';

const btn = document.getElementById('scoreBtn');

const addNew = () => {
  const newName = document.getElementById('name');
  const newScore = document.getElementById('score');
  const nameInput = newName.value;
  const scoreInput = newScore.value;

  if (nameInput !== '' && scoreInput !== '') {
    score.addscore(nameInput, scoreInput);
    createScore();
    newName.value = '';
    newScore.value = '';
  }
};

btn.addEventListener('click', addNew);
export default addNew;
