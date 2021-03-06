// FEATURE: a BankClient account
// As a: high level service
// I want to: have a class where deposit money
// In order to: accumulate several amounts of money REMOTE for MUCH later

import { BankClient } from '../bank-client-persisted-async';
const fakePreviousTransactions = [{ _id: 1, amount: 12 }];
describe('GIVEN: a calculate balance function', () => {
  test('WHEN i have a transactions array THEN it calculates the balance', () => {
    const sut = new BankClient();
    const actual = sut.calculateBalance(fakePreviousTransactions);
    const expected = 12;
    expect(actual).toEqual(expected);
  });
});

describe('GIVEN: a BankClient class with load logic', () => {
  test('WHEN i create a new instance THEN it loads the data and calculates the balance', async () => {
    const { sut, calculateBalanceSpy } = arrangeSpy();
    await sut.load();
    expect(calculateBalanceSpy).toHaveBeenCalledWith(fakePreviousTransactions);
  });
});

describe('GIVEN: a BankClient system with a previous saved transaction of 12', () => {
  let sut;
  beforeEach(async () => {
    const { getAllTransactions, saveTransaction } = arrangeDependencies();
    sut = new BankClient(getAllTransactions, saveTransaction);
    await sut.load();
  });
  test('WHEN: i make a deposit of 10 THEN returns a balance of 22', async () => {
    const input = 10;
    const actual = await sut.deposit(input);
    const expected = 22;
    expect(actual).toEqual(expected);
  });
  test('WHEN: i make a deposit of 10 and then a new deposit of 15 THEN the last one returns the accumulate of 37', async () => {
    await arrangePreviousDeposit(sut);
    const input = 15;
    const actual = await sut.deposit(input);
    const expected = 37;
    expect(actual).toEqual(expected);
  });
});
function arrangeSpy() {
  const getAllTransactions = () => fakePreviousTransactions;
  const sut = new BankClient(getAllTransactions);
  const calculateBalanceSpy = jest.spyOn(sut, 'calculateBalance');
  return { sut, calculateBalanceSpy };
}

function arrangeDependencies() {
  const fakeDelay = 1000;
  const loadPromise = new Promise(resolve => {
    setTimeout(() => resolve(fakePreviousTransactions), fakeDelay);
  });
  const getAllTransactions = async () => loadPromise;
  const saveTransaction = function (transaction) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ ...transaction, _id: 1 });
      }, fakeDelay);
    });
  };
  return { getAllTransactions, saveTransaction };
}

async function arrangePreviousDeposit(sut) {
  const input = 10;
  await sut.deposit(input);
}
