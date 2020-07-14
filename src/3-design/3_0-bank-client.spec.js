import { BalanceStore, BankClient } from './3_0-bank-client';
describe(`GIVEN a Bank Client class`, () => {
  test('WHEN I make a deposit of 10 THEN any new instance should returns the running balance of 10', () => {
    const inputSut = new BankClient();
    const input = 10;
    inputSut.deposit(input);
    const sut = new BankClient();
    const actual = sut.getBalance();
    const expected = 10;
    expect(actual).toEqual(expected);
  });
  test('WHEN I make a deposit of 10 after a deposit of 15 THEN any new instance should returns the running balance of 25', () => {
    const inputSut = new BankClient();
    const inputA = 10;
    inputSut.deposit(inputA);
    const inputB = 15;
    inputSut.deposit(inputB);
    const sut = new BankClient();
    const actual = sut.getBalance();
    const expected = 25;
    expect(actual).toEqual(expected);
  });
  afterEach(() => {
    new BalanceStore().save(0);
  });
});
