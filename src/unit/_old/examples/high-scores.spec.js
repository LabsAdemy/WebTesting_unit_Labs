/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines-per-function */
import { HighScores } from './high-scores';

/*
FEATURE:    Manage a game player's High Score list.
As a:       player with an array of scores
I want to:  get the scores ordered, my last, my best, and my top three scores
So:         I can track my progress
*/

// Scenario: I have a lot of scores
describe('GIVEN: a HighScores class with a big array of scores', () => {
  // Arrange
  const input = [10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 90, 70, 1];
  const sut = new HighScores(input);
  describe('WHEN: I ask for the scores', () => {
    //Act
    const actual = sut.scores;
    console.log({ actual });
    test('THEN: should return the list of scores', () => {
      const expected = [10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 90, 70, 1];
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I ask for Latest score', () => {
    //Act
    const actual = sut.latest;
    test('THEN: should return the last one', () => {
      const expected = 1;
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I ask for the personal best', () => {
    //Act
    const actual = sut.personalBest;
    test('THEN: should return the higher ', () => {
      const expected = 100;
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I ask for the top three', () => {
    //Act
    const actual = sut.personalTopThree;
    test('THEN: should return the three higher scores', () => {
      const expected = [100, 90, 90];
      // assert
      expect(actual).toEqual(expected);
    });
  });
});

// Scenario: I have just started with the game
describe('GIVEN: a HighScores class with a small array of scores', () => {
  // Arrange
  const input = [30, 70];
  const sut = new HighScores(input);
  describe('WHEN: I ask for the top three', () => {
    //Act
    const actual = sut.personalTopThree;
    test('THEN: should return only the two available scores', () => {
      const expected = [70, 30];
      // assert
      expect(actual).toEqual(expected);
    });
  });
});
