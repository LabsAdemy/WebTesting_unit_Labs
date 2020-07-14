export class BankClient {
  constructor(balance) {
    this.storedBalance = balance;
  }
  deposit(amount) {
    this.storedBalance.balance += amount;
    return this.getBalance();
  }
  getBalance() {
    return this.storedBalance;
  }
}
