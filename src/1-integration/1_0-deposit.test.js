const { Account } = require('./bank/account');

describe('a new account with a deposit', () => {
  const sut = new Account();
  const input = 20;
  sut.deposit(input);
  test('should have the correct balance', () => {
    const actual = sut.getBalance();
    const expected = 20;
    expect(actual).toBe(expected);
  });
});

describe('a new account with two deposits', () => {
  const sut = new Account();
  const input = 20;
  sut.deposit(input);
  test('should accumulate the amounts in the balance', () => {
    const actual = sut.getBalance();
    const expected = 20;
    expect(actual).toBe(expected);
  });
});
