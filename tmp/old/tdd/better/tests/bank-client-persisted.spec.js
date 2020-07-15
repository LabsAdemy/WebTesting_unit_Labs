// FEATURE: a BankClient account
// As a: high level service
// I want to: have a class where deposit money
// In order to: accumulate several amounts of money for MUCH later

import { BankClient } from '../bank-client-persisted';

describe('GIVEN: a calculate balance function', () => {
  test('WHEN i have a transactions array THEN it calculates the balance', () => {
    const input = [{ _id: 1, amount: 12 }];
    const sut = new BankClient();
    const actual = sut.calculateBalance(input);
    const expected = 12;
    expect(actual).toEqual(expected);
  });
  test('WHEN i have more transactions array THEN it calculates the balance', () => {
    const input = [
      { _id: 1, amount: 12 },
      { _id: 1, amount: 13 },
    ];
    const sut = new BankClient();
    const actual = sut.calculateBalance(input);
    const expected = 25;
    expect(actual).toEqual(expected);
  });
});

describe('GIVEN: a BankClient class with load logic', () => {
  test('WHEN  i load the transactions THEN it calls the specific function', () => {
    const getAllTransactions = () => [];
    const sut = new BankClient(getAllTransactions);
    const calculateBalanceSpy = jest.spyOn(sut, 'getAllTransactions');
    sut.load();
    expect(calculateBalanceSpy).toHaveBeenCalled();
  });
  test('WHEN i load the transactions THEN it calls the calculateBalance function', () => {
    const fakePreviousTransactions = [{ _id: 1, amount: 12 }];
    const getAllTransactions = () => fakePreviousTransactions;
    const sut = new BankClient(getAllTransactions);
    const calculateBalanceSpy = jest.spyOn(sut, 'calculateBalance');
    sut.load();
    expect(calculateBalanceSpy).toHaveBeenCalledWith(fakePreviousTransactions);
  });
});

describe('GIVEN: a BankClient system with a previous saved transaction of 12', () => {
  let sut;
  beforeEach(() => {
    const fakePreviousTransactions = [{ _id: 1, amount: 12 }];
    const getAllTransactions = () => fakePreviousTransactions;
    const saveTransaction = transaction => ({ ...transaction, _id: 1 });
    sut = new BankClient(getAllTransactions, saveTransaction);
    sut.load();
  });
  test('WHEN: i make a deposit of 10 THEN returns a balance of 22', () => {
    const input = 10;
    const actual = sut.deposit(input);
    const expected = 22;
    expect(actual).toEqual(expected);
  });
  test('WHEN: i make a deposit of 10 and then a new deposit of 15 THEN the last one returns the accumulate of 37', () => {
    let input = 10;
    sut.deposit(input);
    input = 15;
    const actual = sut.deposit(input);
    const expected = 37;
    expect(actual).toEqual(expected);
  });
});
