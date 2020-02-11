/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines-per-function */
import { HammingCalculator } from './hamming-dna';

/*
FEATURE:    Calculate the Hamming Distance between two DNA strands.
As a:       biologist studying cell divisions
I want to:  compare two strands of DNA and count the differences between them
So:         I can see how many mistakes occurred.
*/

// Scenario: we have two valid sequences of equal length

describe('GIVEN: a Hamming Calculator that receives two valid strings', () => {
  // Arrange
  const sut = new HammingCalculator();
  describe('WHEN: I compare two empty strands', () => {
    const input = ['', ''];
    // Act
    const actual = sut.compare(...input);
    test('THEN: should return cero', () => {
      const expected = 0;
      // assert
      expect(actual).toEqual(expected);
    });
  });
});

// Alternate ways

describe('GIVEN: a Hamming Calculator that receives two valid strings', () => {
  let sut;
  beforeAll(() => {
    // Arrange
    sut = new HammingCalculator();
  });
  describe('WHEN: I compare two empty strands', () => {
    test('THEN: should return cero', () => {
      const input = ['', ''];
      // Act
      const actual = sut.compare(...input);
      const expected = 0;
      // assert
      expect(actual).toEqual(expected);
    });
  });
});

describe('GIVEN: a Hamming Calculator that receives two valid strings', () => {
  let sut;
  let actual;
  beforeAll(() => {
    // Arrange
    sut = new HammingCalculator();
  });
  describe('WHEN: I compare two empty strands', () => {
    beforeAll(() => {
      const input = ['', ''];
      // Act
      actual = sut.compare(...input);
    });
    test('THEN: should return cero', () => {
      const expected = 0;
      // assert
      expect(actual).toEqual(expected);
    });
  });
});
