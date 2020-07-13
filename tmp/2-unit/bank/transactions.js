export class Transactions {
  constructor() {
    this._transactions = this.load();
  }
  store(newTransaction) {
    this._transactions.push(newTransaction);
  }
  load() {
    return new Array();
  }
  getAll() {
    return this._transactions;
  }
}
