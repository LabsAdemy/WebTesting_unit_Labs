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
