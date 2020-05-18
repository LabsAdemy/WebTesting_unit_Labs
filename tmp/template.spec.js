/*
FEATURE:    Purpose of the Subject Under Test
As a:       user of the SUT
I want to:  do something
So:         I achieve a goal.
*/

// Scenario: a real user situation
describe('GIVEN: a context', () => {
  // Arrange
  const sut = null;
  describe('WHEN: some conditions', () => {
    const input = null;
    //Act
    const actual = null; // = sut( input ) ; = sut().method(input);
    test('THEN: expect some output', () => {
      const expected = null;
      // assert
      expect(actual).toEqual(expected);
    });
  });
});
