export class BankClient {
  constructor(getAllTransactions, saveTransaction) {
    this.getAllTransactions = getAllTransactions;
    this.saveTransaction = saveTransaction;
  }
  async load() {
    const transactions = await this.getAllTransactions();
    this.balance = transactions.reduce(
      (runningBalance, transaction) => runningBalance + transaction.amount,
      0
    );
  }
  deposit(amount) {
    const transaction = { amount };
    this.saveTransaction(transaction);
    this.balance += amount;
    return this.balance;
  }
}
