import ScoresList from './classlist.js';

export const score = new ScoresList();

const createScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/odai/scores');
  const data = await response.json();
  const { length } = data.result;
  const listSection = document.querySelector('.results');
  listSection.replaceChildren();
  if (length > 0) {
    listSection.style.display = 'block';
    const listContainer = document.createElement('ul');
    listContainer.className = 'allscores';
    listSection.appendChild(listContainer);
    for (let i = 0; i < length; i += 1) {
      const list = document.createElement('li');
      list.className = 'scoreItem';

      const descrpt = document.createElement('p');
      descrpt.id = i;
      descrpt.textContent = `${data.result[i].user}: ${data.result[i].score}`;
      list.appendChild(descrpt);

      listContainer.append(list);
    }
    listSection.appendChild(listContainer);
  }
};

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', createScore);

export default createScore;
