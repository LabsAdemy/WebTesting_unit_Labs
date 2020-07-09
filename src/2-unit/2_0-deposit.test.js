jest.enableAutomock();
import { Account } from './bank/account';
jest.unmock('./bank/account');
jest.mock('./bank/clerk');
jest.mock('./bank/transactions');

describe('a new account mocked with a deposit', () => {
  const sut = new Account();
  const input = 20;
  sut.deposit(input);
  test('should not have a balance', () => {
    const actual = sut.getBalance();
    const expected = undefined;
    expect(actual).toBe(expected);
  });
});

// describe('a new account spied with a deposit', () => {
//   const sut = new Account();
//   const input = 20;
//   const spy = jest.spyOn(Account, 'store');
//   sut.deposit(input);
//   test('have made a call to store the transaction', () => {
//     expect(spy).toBeCalled();
//   });
// });
