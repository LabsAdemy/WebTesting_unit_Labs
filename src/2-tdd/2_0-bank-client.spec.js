import { BankClient } from './2_0-bank-client';
describe(`GIVEN a Bank Client class`, () => {
  test(`THEN I can create an instance`, () => {
    const sut = new BankClient();
    expect(sut).toBeInstanceOf(BankClient);
  });
  test(`THEN I can make a deposit`, () => {
    const sut = new BankClient();
    sut.deposit();
    expect(sut).toBeInstanceOf(BankClient);
  });
  test('WHEN I make a deposit of 10 THEN it should returns the running balance of 10', () => {
    const sut = new BankClient();
    const input = 10;
    const actual = sut.deposit(input);
    const expected = 10;
    expect(actual).toEqual(expected);
  });
  test('WHEN I make a deposit of 15 THEN it should returns the running balance of 15', () => {
    const sut = new BankClient();
    const input = 15;
    const actual = sut.deposit(input);
    const expected = 15;
    expect(actual).toEqual(expected);
  });
  test('WHEN I make a deposit of 10 and then a new deposit of 15 THEN the last one should return the accumulated 25', () => {
    const sut = new BankClient();
    const firstInput = 10;
    sut.deposit(firstInput);
    const secondInput = 15;
    const actual = sut.deposit(secondInput);
    const expected = 25;
    expect(actual).toEqual(expected);
  });
});
