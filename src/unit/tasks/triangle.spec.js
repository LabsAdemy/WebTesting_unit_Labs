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

// GIVEN: a Triangle class called with three equal values
// WHEN: i ask for the kind
// THEN: should return equilateral

// Scenario: I have a valid triangle with two equal sides

// GIVEN: a Triangle class called with only first two equal values
// WHEN: i ask for the kind
// THEN: should return isosceles

// GIVEN: a Triangle class called with only last two equal values
// WHEN: i ask for the kind
// THEN: should return isosceles

// GIVEN: a Triangle class called with first and last equal values
// WHEN: i ask for the kind
// THEN: should return isosceles

// Scenario: I have a valid triangle with no equal sides

// GIVEN: a Triangle class called with no equal values
// WHEN: i ask for the kind
// THEN: should return scalene

/** https://jestjs.io/docs/en/expect#tothrowerror */

// Scenario: I have an invalid triangle

// GIVEN: a Triangle class called with ceros
// WHEN: i ask for the kind
// THEN: should throw an error

// GIVEN: a Triangle class called negative values
// WHEN: i ask for the kind
// THEN: should throw an error

// GIVEN: a Triangle class called with no Triangle inequality values
// WHEN: i ask for the kind
// THEN: should throw an error
