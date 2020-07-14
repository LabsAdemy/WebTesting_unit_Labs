import { BankClient } from './3_1-bank-client';
describe(`GIVEN a Bank Client class`, () => {
  test('WHEN I make a deposit of 10 THEN any new instance should returns the running balance of 10', () => {
    const inputBalance = {
      balance: 0,
    };
    const inputSut = new BankClient(inputBalance);
    const input = 10;
    inputSut.deposit(input);
    const sut = new BankClient(inputBalance);
    const actual = sut.getBalance();
    const expected = { balance: 10 };
    expect(actual).toEqual(expected);
  });
  test('WHEN I make a deposit of 10 after a deposit of 15 THEN any new instance should returns the running balance of 25', () => {
    const inputBalance = {
      balance: 0,
    };
    const inputSut = new BankClient(inputBalance);
    const inputA = 10;
    inputSut.deposit(inputA);
    const inputB = 15;
    inputSut.deposit(inputB);
    const sut = new BankClient(inputBalance);
    const actual = sut.getBalance();
    const expected = { balance: 25 };
    expect(actual).toEqual(expected);
  });
});
