// FEATURE: a BankClient account
// As a: high level service
// I want to: have a class where deposit money
// In order to: accumulate several amounts of money for later

import { BankClient } from '../bank-client';

describe('GIVEN: a new BankClient object', () => {
  let sut;
  beforeEach(() => {
    sut = new BankClient();
  });
  test('WHEN: i make a deposit of 10 THEN returns a balance of 10', () => {
    const input = 10;
    const actual = sut.deposit(input);
    const expected = 10;
    expect(actual).toEqual(expected);
  });
  test('WHEN: i make a deposit of 10 and then a new deposit of 15 THEN the last one returns the accumulate of 25', () => {
    let input = 10;
    sut.deposit(input);
    input = 15;
    const actual = sut.deposit(input);
    const expected = 25;
    expect(actual).toEqual(expected);
  });
});
