export class BankClient {
  constructor() {
    this.balance = 0;
  }
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
}
