export class BankClient {
  constructor(getAllTransactions, saveTransaction) {
    this.getAllTransactions = getAllTransactions;
    this.saveTransaction = saveTransaction;
    this.balance = 0;
  }
  load() {
    const transactions = this.getAllTransactions();
    this.calculateBalance(transactions);
  }
  calculateBalance(transactions) {
    this.balance = transactions.reduce(
      (runningBalance, transaction) => runningBalance + transaction.amount,
      this.balance
    );
    return this.balance;
  }

  deposit(amount) {
    const transaction = { amount };
    this.saveTransaction(transaction);
    this.balance += amount;
    return this.balance;
  }
}
