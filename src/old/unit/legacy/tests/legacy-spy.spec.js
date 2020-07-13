import { Account } from '../account';
import { BankClient } from '../bank-client';
import { Loan } from '../loan';
jest.mock('../account');
jest.mock('../loan');
let sutBankClient;
let mockAccountInstance;
let spyDepositMethod;
let mockLoanInstance;
let spyBorrowMethod;

describe('GIVEN: a new BankClient', () => {
  beforeEach(() => {
    Account.mockClear();
    const inputCredit = 100;
    arrangeBank(inputCredit);
  });
  test('THEN account constructor should be called', assertAccountConstructorIsCalled);
});

describe('GIVEN: a new BankClient WHEN: i deposit 20', () => {
  beforeEach(() => {
    Account.mockClear();
    const inputCredit = 100;
    const inputAmount = 20;
    arrangeBank(inputCredit);
    arrangeAccountSpy();
    actDeposit(inputAmount);
  });
  test('THEN account.deposit should be called once', assertAccountDepositIsCalled);
  test('AND account.deposit should be with 20', assertAccountDepositIsCalledWithAmount);
});

function arrangeBank(input) {
  sutBankClient = new BankClient(input);
}
function actDeposit(input) {
  sutBankClient.deposit(input);
}
function assertAccountConstructorIsCalled() {
  expect(Account).toHaveBeenCalledTimes(1);
}
function arrangeAccountSpy() {
  mockAccountInstance = Account.mock.instances[0];
  spyDepositMethod = mockAccountInstance.deposit;
}
function assertAccountDepositIsCalled() {
  expect(spyDepositMethod).toHaveBeenCalledTimes(1);
}
function assertAccountDepositIsCalledWithAmount() {
  const expected = 20;
  expect(spyDepositMethod).toHaveBeenCalledWith(expected);
}

describe('GIVEN: a new BankClient with 20 WHEN: i ask for 30', () => {
  beforeEach(() => {
    Account.mockClear();
    Loan.mockClear();
    const inputCredit = 100;
    const inputAsked = 30;
    arrangeBankWithCash(inputCredit);
    arrangeLoanSpy();
    actWithdraw(inputAsked);
  });
  test('AND THEN loan.borrow should be called with 10', assertLoanBorrowIsCalledWithAmount);
});

function arrangeBankWithCash(inputCredit) {
  sutBankClient = new BankClient(inputCredit);
}
function arrangeLoanSpy() {
  mockAccountInstance = Account.mock.instances[0];
  const fakeBalance = 20;
  jest.spyOn(mockAccountInstance, 'getBalance').mockImplementation(() => fakeBalance);
  mockLoanInstance = Loan.mock.instances[0];
  spyBorrowMethod = mockLoanInstance.borrow;
}
function actWithdraw(input) {
  sutBankClient.withdraw(input);
}
function assertLoanBorrowIsCalledWithAmount() {
  const expected = 10;
  expect(spyBorrowMethod).toHaveBeenCalledWith(expected);
}
