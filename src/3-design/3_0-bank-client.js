export class BankClient {
  constructor() {
    this.balanceStore = new BalanceStore();
    this.balance = this.balanceStore.load();
  }
  deposit(amount) {
    this.balance += amount;
    this.balanceStore.save(this.balance);
    return this.getBalance();
  }
  getBalance() {
    return this.balance;
  }
}

export class BalanceStore {
  static store = 0;
  load() {
    return BalanceStore.store;
  }
  save(store) {
    BalanceStore.store = store;
  }
}
