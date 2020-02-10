import { ExchangeCalculator } from './exchange-calculator';
/*
FEATURE:    Convert an amount from one currency to another
As a:       money investor
I want to:  know the value of any currency at a given time
So:         I can buy or sell money.
*/

// Scenario: form euros to dollars at the last exchange rate
describe('GIVEN: a ExchangeCalculator with rates', () => {
  // Arrange
  const dummy = { USD: 1.2 };
  const sut = new ExchangeCalculator(dummy);
  describe('WHEN: we convert 1000 EUR to USD', () => {
    const input = [1000, 'EUR', 'USD'];
    //Act
    const actual = sut.convert(...input);
    test('THEN: expect to get 1200', () => {
      const expected = 1200;
      // assert
      expect(actual).toEqual(expected);
    });
  });
});

// Scenario: form euros to dollars at the last exchange rate
describe('GIVEN: a ExchangeCalculator without rates', () => {
  // Arrange
  const sut = new ExchangeCalculator();
  const stubGetRate = jest.spyOn(sut, 'getRate').mockReturnValue(1.2);
  describe('WHEN: we convert 1000 EUR to USD', () => {
    const input = [1000, 'EUR', 'USD'];
    //Act
    const actual = sut.convert(...input);
    test('THEN: expect to get 1200', () => {
      const expected = 1200;
      // assert
      expect(actual).toEqual(expected);
    });
  });
});

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c

// https://codewithhugo.com/jest-fn-spyon-stub-mock/
