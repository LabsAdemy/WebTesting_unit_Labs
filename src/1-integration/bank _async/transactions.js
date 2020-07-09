import { getAllTransactions, postTransaction } from './transactions-service';

export class Transactions {
  constructor() {
    this._transactions = [];
  }
  async store(newTransaction) {
    await postTransaction(newTransaction);
    this._transactions.push(newTransaction);
  }
  async load() {
    return await getAllTransactions();
  }
  getAll() {
    return this._transactions;
  }
}
