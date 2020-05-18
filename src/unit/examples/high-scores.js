export class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores[this.scores.length - 1];
  }

  get personalBest() {
    const MINIMUM = 0;
    let best = MINIMUM;
    for (let i = MINIMUM; i < this._scores.length - 1; i++) {
      if (best < this._scores[i]) {
        best = this._scores[i];
      }
    }
    return best;
  }

  get personalTopThree() {
    let result = [];
    let sortedScores = this.getSortedScores();
    const MINIMUM = 0;
    const MAXIMUN = 3;
    for (let i = MINIMUM; i < MAXIMUN; i++) {
      if (sortedScores[i] !== undefined) {
        result.push(sortedScores[i]);
      } else {
        break;
      }
    }
    return result;
  }

  getSortedScores() {
    let temp = [...this._scores];
    temp.sort(function (a, b) {
      return b - a;
    });
    return temp;
  }
}
