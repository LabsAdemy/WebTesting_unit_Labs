/*
FEATURE:    Given a year, report if it is a leap year.
As a:       calendar printer
I want to:  know if February has 28 or 29 days
So:         I can print my calendars.
*/

/*
A leap year in the Gregorian calendar occurs
  on every year that is evenly divisible by 4: [1970, !1971]
    except every year that is evenly divisible by 100: [!1900]
      unless that year is also evenly divisible by (4*100) 400: [2000]
*/

// Scenario: a year
describe('GIVEN: a year', () => {
  // Arrange
  const sut = null; // = new LeapYearReporter();
  describe('WHEN: is not divisible by 4', () => {
    const input = 1971;
    //Act
    const actual = null; // sut.isLeap(input);
    test.skip('THEN: expect to not be leap', () => {
      const expected = false;
      // assert
      expect(actual).toEqual(expected);
    });
  });
});
