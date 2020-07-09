const { Account } = require('./bank/account');

describe('a new account with two different transaction types', () => {
  const sut = new Account();
  const inputDeposit = 20;
  sut.deposit(inputDeposit);
  const inputWithdraw = 15;
  sut.withdraw(inputWithdraw);
  test('should have a balance that adds and substracts the amounts', () => {
    const actual = sut.getBalance();
    const expected = 5;
    expect(actual).toBe(expected);
  });
});

describe('a new account with slightly more withdraw than deposit', () => {
  const sut = new Account();
  const inputDeposit = 15;
  sut.deposit(inputDeposit);
  const inputWithdraw = 20;
  sut.withdraw(inputWithdraw);
  test('should have a negative balance', () => {
    const actual = sut.getBalance();
    expect(actual).toBeLessThan(0);
  });
});

describe('a new account with a lot more withdraw than deposit', () => {
  const sut = new Account();
  const inputDeposit = 15;
  sut.deposit(inputDeposit);
  const inputWithdraw = 200;
  test('should throw an exception', () => {
    expect(() => sut.withdraw(inputWithdraw)).toThrow();
  });
});
