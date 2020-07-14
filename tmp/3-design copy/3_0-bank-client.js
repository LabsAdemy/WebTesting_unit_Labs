export class BankClient {
  static balance = 0;
  constructor() {}
  deposit(amount) {
    BankClient.balance += amount;
    return this.getBalance;
  }
  getBalance() {
    return BankClient.balance;
  }
  static clear() {
    BankClient.balance = 0;
  }
}
