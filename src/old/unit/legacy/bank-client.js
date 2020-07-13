import { Account } from './account';
import { Loan } from './loan';

export class BankClient {
  constructor(defaultCredit) {
    this.account = new Account();
    this.loan = new Loan(defaultCredit);
  }
  deposit(amount) {
    if (this.loan._disposed > 0) {
      const newAmount = this._payDebtsBefore(amount);
      this.account.deposit(newAmount);
    } else {
      this.account.deposit(amount);
    }
  }
  _payDebtsBefore(amount) {
    const toPayBack = amount > this.loan.getDisposed() ? this.loan.getDisposed() : this.amount;
    this.loan.payBack(toPayBack);
    return amount - toPayBack;
  }

  withdraw(amount) {
    if (this.account.getBalance() > amount) {
      this.account.withdraw(amount);
    } else {
      this._askForCredit(amount);
      this.account.withdraw(this.account.getBalance());
    }
  }

  _askForCredit(amount) {
    const creditNeeded = amount - this.account.getBalance();
    this.loan.borrow(creditNeeded);
  }

  getPosition() {
    return this.account.getBalance() - this.loan.getDisposed();
  }
}
