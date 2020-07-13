export class Account {
  constructor() {
    this._balance = 0;
  }
  deposit(amount) {
    this._balance += amount;
  }
  withdraw(amount) {
    this._balance -= amount;
  }
  getBalance() {
    return this._balance;
  }
}
