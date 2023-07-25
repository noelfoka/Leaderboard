export default class ScoresList {
  constructor() {
    this.allscores = [];
  }

  saveScore() {
    const sco = JSON.stringify(this.allscores);
    localStorage.setItem("scores", sco);
  }

  addscore(names, scorevalue) {
    const scoreArr = { names, scorevalue };
    this.allscores.push(scoreArr);
    this.saveScore();
  }

  getStoredscore() {
    this.allscores = JSON.parse(localStorage.getItem("scores"));
  }
}
