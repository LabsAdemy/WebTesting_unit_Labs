import { Account } from '../account';
import { BankClient } from '../bank-client';
import { Loan } from '../loan';
jest.mock('../account');
jest.mock('../loan');

let sutBankClient;
let mockLoanInstance;
let spyBorrowMethod;

describe('GIVEN: a new BankClient with 25 WHEN: i ask for 30', () => {
  beforeEach(() => {
    Account.mockClear();
    Loan.mockClear();
    arrangeAccountDouble();
    const inputCredit = 100;
    const inputAsked = 30;
    arrangeBankWithCash(inputCredit);
    arrangeLoanSpy();
    actWithdraw(inputAsked);
  });
  test('AND THEN loan.borrow should be called with 5', assertLoanBorrowIsCalledWithAmount);
});
function arrangeAccountDouble() {
  const fakeBalance = 25;
  Account.mockImplementation(() => {
    return {
      getBalance: () => fakeBalance,
      withdraw: () => {},
    };
  });
}
function arrangeBankWithCash(inputCredit) {
  sutBankClient = new BankClient(inputCredit);
}
function arrangeLoanSpy() {
  mockLoanInstance = Loan.mock.instances[0];
  spyBorrowMethod = mockLoanInstance.borrow;
}
function actWithdraw(input) {
  sutBankClient.withdraw(input);
}
function assertLoanBorrowIsCalledWithAmount() {
  const expected = 5;
  expect(spyBorrowMethod).toHaveBeenCalledWith(expected);
}
