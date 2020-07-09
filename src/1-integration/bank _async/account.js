import { Clerk } from './clerk';
import { Transactions } from './transactions';
export class Account {
  constructor(credit = 100) {
    this._transactions = new Transactions();
    this._clerk = new Clerk(credit, this._transactions.getAll());
  }
  async deposit(amount) {
    await this._transactions.store({ type: 'deposit', amount });
  }
  async withdraw(amount) {
    if (this._clerk.isAllowed(amount)) {
      await this._transactions.store({ type: 'withdraw', amount });
    } else {
      throw 'insufficient credit ';
    }
  }
  getBalance() {
    return this._clerk.calculateBalance();
  }
}
