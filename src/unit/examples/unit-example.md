# Teacher Sample

## SUT

- [high-scores.js](https://github.com/LabsAdemy/WebTesting_unit_Labs/blob/master/src/unit/examples/high-scores.js)

## Functional tests already done

- **FEATURE:** Manage a game player's High Score list.

  - _Aa a:_ player with an array of scores
  - _I want to:_ to get the scores ordered, my last, my best, and my top three scores
  - _So:_ I can track my progress
  - **Scenario:** I have a lot of scores
    - _Given_ a HighScores class with a big array of scores
    - _When_ I ask for the scores
    - _Then_ should return the list of scores ordered
    - _And When_ I ask for Latest score
    - _Then_ should return the last one
    - _And When_ I ask for the personal best
    - _Then_ should return the higher
    - _And When_ I ask for the top three
    - _Then_ should return the three higher scores
  - **Scenario:** I have just started with the game
    - _Given_ a HighScores class with a small array of scores
    - _When_ I ask for the top three
    - _Then_ should return only the two available scores

- [unit-highscores](https://github.com/LabsAdemy/WebTesting_unit_Labs/blob/master/src/unit/examples/high-scores.spec.js)
