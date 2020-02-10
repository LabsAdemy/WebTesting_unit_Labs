/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
import { Triangle } from './triangle';
/*
FEATURE:    Determine if a triangle is equilateral, isosceles, or scalene.
Aa a:       math student
I want to:  check the kind of any triangle
So:         I can learn about its geometry
*/

// Scenario: I have a valid triangle with three sides
describe('GIVEN: a Triangle class called with three legal values', () => {
  // Arrange
  const triangle = new Triangle(1, 2, 3);
  describe('WHEN: i ask for the kind', () => {
    //Act
    const kind = triangle.kind();
    const actual = typeof kind;
    test('THEN: should return a string', () => {
      const expected = 'string';
      // assert
      expect(actual).toBe(expected);
    });
  });
});
// Scenario: I have a valid triangle with three equal sides
describe('GIVEN: a Triangle class called with three equal values', () => {
  // Arrange
  const triangle = new Triangle(3, 3, 3);
  describe('WHEN: i ask for the kind', () => {
    //Act
    const actual = triangle.kind();
    test('THEN: should return _equilateral_', () => {
      const expected = 'equilateral';
      // assert
      expect(actual).toBe(expected);
    });
  });
});
// Scenario: I have a valid triangle with two equal sides
describe('GIVEN: a Triangle class called with only first two equal values', () => {
  // Arrange
  const triangle = new Triangle(3, 3, 4);
  describe('WHEN: i ask for the kind', () => {
    //Act
    const actual = triangle.kind();
    test('THEN: should return _isosceles_', () => {
      const expected = 'isosceles';
      // assert
      expect(actual).toBe(expected);
    });
  });
});
describe('GIVEN: a Triangle class called with only the last two equal values', () => {
  // Arrange
  const triangle = new Triangle(4, 3, 3);
  describe('WHEN: i ask for the kind', () => {
    //Act
    const actual = triangle.kind();
    test('THEN: should return _isosceles_', () => {
      const expected = 'isosceles';
      // assert
      expect(actual).toBe(expected);
    });
  });
});
describe('GIVEN: a Triangle class called with only first and last equal values', () => {
  // Arrange
  const triangle = new Triangle(3, 4, 3);
  describe('WHEN: i ask for the kind', () => {
    //Act
    const actual = triangle.kind();
    test('THEN: should return _isosceles_', () => {
      const expected = 'isosceles';
      // assert
      expect(actual).toBe(expected);
    });
  });
});
// Scenario: I have a valid triangle with no equal sides
describe('GIVEN: a Triangle class called with no equal values', () => {
  // Arrange
  const triangle = new Triangle(3, 4, 5);
  describe('WHEN: i ask for the kind', () => {
    //Act
    const actual = triangle.kind();
    test('THEN: should return _scalene_', () => {
      const expected = 'scalene';
      // assert
      expect(actual).toBe(expected);
    });
  });
});
// Scenario: I have an invalid triangle
describe('GIVEN: a Triangle class called with ceros', () => {
  // Arrange
  const triangle = new Triangle(0, 0, 0);
  describe('WHEN: i ask for the kind', () => {
    test('THEN: should throw an error', () => {
      expect(() => {
        //Act
        triangle.kind();
      }).toThrow(); // assert
    });
  });
});
describe('GIVEN: a Triangle class called negative values', () => {
  // Arrange
  const triangle = new Triangle(-2, -3, -4);
  describe('WHEN: i ask for the kind', () => {
    test('THEN: should throw an error', () => {
      expect(() => {
        //Act
        triangle.kind();
      }).toThrow(); // assert
    });
  });
});
describe('GIVEN: a Triangle class called with no Triangle inequality values', () => {
  // Arrange
  const triangle = new Triangle(2, 3, 9);
  describe('WHEN: i ask for the kind', () => {
    test('THEN: should throw an error', () => {
      expect(() => {
        //Act
        triangle.kind();
      }).toThrow(); // assert
    });
  });
});
