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
    for (let i = MINIMUM; i < this._scores[this._scores.length - 1]; i++) {
      if (best < this._scores[i]) {
        best = this._scores[i];
      }
    }
    return best;
  }

  get personalTopThree() {
    let result = [];
    let temp = [...this._scores];
    temp.sort(function(a, b) {
      return b - a;
    });
    const MINIMUM = 0;
    const MAXIMUN = 3;
    for (let i = MINIMUM; i < MAXIMUN; i++) {
      if (temp[i] !== undefined) {
        result.push(temp[i]);
      } else {
        break;
      }
    }
    return result;
  }
}
