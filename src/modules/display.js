import ScoresList from "./classList.js";

export const score = new ScoresList();

const createScore = () => {
  const listSection = document.querySelector(".results");
  listSection.replaceChildren();

  if (score.allscores.length > 0) {
    listSection.style.display = "block";
    const listContainer = document.createElement("ul");
    listContainer.className = "allscores";
    listSection.appendChild(listContainer);
    score.allscores.map((a) => {
      const list = document.createElement("li");
      list.className = "scoreItem";

      const descrpt = document.createElement("p");
      descrpt.id = score.allscores.length - 1;
      descrpt.textContent = `${a.names}: ${a.scorevalue}`;
      list.appendChild(descrpt);

      listContainer.appendChild(list);
      return list;
    });
    listSection.appendChild(listContainer);
  }
};

window.addEventListener("reload", createScore);

export default createScore;
