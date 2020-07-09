import { Account } from './bank/account';

describe('GIVEN a new account with two different transaction types', () => {
  const sut = new Account();
  const inputDeposit = 20;
  sut.deposit(inputDeposit);
  const inputWithdraw = 15;
  sut.withdraw(inputWithdraw);
  test('SHOULD have a balance that adds and substracts the amounts', () => {
    const actual = sut.getBalance();
    const expected = 5;
    expect(actual).toBe(expected);
  });
});

describe('GIVEN a new account with slightly more withdraw than deposit', () => {
  const sut = new Account();
  const inputDeposit = 15;
  sut.deposit(inputDeposit);
  const inputWithdraw = 20;
  sut.withdraw(inputWithdraw);
  test('SHOULD have a negative balance', () => {
    const actual = sut.getBalance();
    expect(actual).toBeLessThan(0);
  });
});

describe('GIVEN a new account with a lot more withdraw than deposit', () => {
  const sut = new Account();
  const inputDeposit = 15;
  sut.deposit(inputDeposit);
  const inputWithdraw = 200;
  test('SHOULD throw an exception', () => {
    expect(() => sut.withdraw(inputWithdraw)).toThrow();
  });
});
