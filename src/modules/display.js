import ScoresList from './classList.js';

export const score = new ScoresList();

const createScore = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/odai-alazzeh/scores',
  );
  const data = await response.json();
  const { length } = data.result;
  const tr = document.querySelector('.first');
  const listSection = document.querySelector('.container');
  listSection.replaceChildren();
  listSection.before(tr);
  if (length > 0) {
    for (let i = 0; i < length; i += 1) {
      const list = document.createElement('tr');
      list.className = 'scoreItem';

      const descrpt = document.createElement('td');
      descrpt.textContent = `${data.result[i].user}`;
      list.appendChild(descrpt);

      const descrpt1 = document.createElement('td');
      descrpt1.textContent = `${data.result[i].score}`;
      list.appendChild(descrpt1);

      listSection.append(list);
    }
  }
};
createScore();
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', createScore);

export default createScore;
