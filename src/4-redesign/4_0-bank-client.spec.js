import { BankClient } from './4_0-bank-client';
describe(`GIVEN a Bank Client class`, () => {
  test('WHEN I make a deposit of 10 THEN any new instance should returns the running balance of 10', () => {
    const inputStore = {
      load: () => 10,
      save: balance => {},
    };
    const inputSut = new BankClient(inputStore);
    const input = 10;
    inputSut.deposit(input);
    const sut = new BankClient(inputStore);
    const actual = sut.getBalance();
    const expected = 10;
    expect(actual).toEqual(expected);
  });
  test('WHEN I make a deposit of 10 after a deposit of 15 THEN any new instance should returns the running balance of 25', () => {
    const inputStore = {
      load: () => 25,
      save: balance => {},
    };
    const inputSut = new BankClient(inputStore);
    const inputA = 10;
    inputSut.deposit(inputA);
    const inputB = 15;
    inputSut.deposit(inputB);
    const sut = new BankClient(inputStore);
    const actual = sut.getBalance();
    const expected = 25;
    expect(actual).toEqual(expected);
  });
  test('WHEN I make a deposit THEN save to the store will be called one time', () => {
    const inputStore = {
      load: () => {},
      save: balance => {},
    };
    const saveSpy = jest.spyOn(inputStore, 'save');
    const inputSut = new BankClient(inputStore);
    const input = 10;
    inputSut.deposit(input);
    expect(saveSpy).toBeCalledTimes(1);
  });
  test('WHEN I make a deposit THEN save to the store will be called with 10', () => {
    const inputStore = {
      load: () => 0,
      save: () => {},
    };
    const saveSpy = jest.spyOn(inputStore, 'save');
    const inputSut = new BankClient(inputStore);
    const input = 10;
    inputSut.deposit(input);
    expect(saveSpy).toBeCalledWith(10);
  });
});
