import { Clerk } from './clerk';
import { Transactions } from './transactions';
export class Account {
  constructor(credit = 100) {
    this._transactions = new Transactions();
    this._clerk = new Clerk(credit, this._transactions.getAll());
  }
  deposit(amount) {
    this.store({ type: 'deposit', amount });
  }
  withdraw(amount) {
    if (this._clerk.isAllowed(amount)) {
      this.store({ type: 'withdraw', amount });
    } else {
      throw 'insufficient credit ';
    }
  }
  store(transaction) {
    this._transactions.store(transaction);
  }
  getBalance() {
    return this._clerk.calculateBalance();
  }
}
