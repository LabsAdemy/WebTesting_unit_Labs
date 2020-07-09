import { Account } from './bank _async/account';

describe('a new async account with a deposit', () => {
  const sut = new Account();
  const input = 20;
  test('should have the correct balance', async () => {
    await sut.deposit(input);
    const actual = sut.getBalance();
    const expected = 20;
    expect(actual).toBe(expected);
  });
});
