export default class ScoresList {
  async addscore(names, scorevalue) {
    this.a = 'hi';
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/odai/scores', {
      method: 'POST',
      body: JSON.stringify({
        user: names,
        score: scorevalue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    await ((response) => response.json());
    await ((error) => error('Error:', error));
  }
}
