import { Account } from './bank/account';

describe('GIVEN a new account with a deposit', () => {
  test('SHOULD have the correct balance', () => {});
});

describe('GIVEN a new account with a deposit', () => {
  const sut = new Account();
  const input = 20;
  sut.deposit(input);
  test('SHOULD have the correct balance', () => {
    const actual = sut.getBalance();
    const expected = 20;
    expect(actual).toBe(expected);
  });
});

describe('GIVEN a new account with two deposits', () => {
  const sut = new Account();
  const inputA = 20;
  sut.deposit(inputA);
  const inputB = 10;
  sut.deposit(inputB);
  test('SHOULD accumulate the amounts in the balance', () => {
    const actual = sut.getBalance();
    const expected = 30;
    expect(actual).toBe(expected);
  });
});
