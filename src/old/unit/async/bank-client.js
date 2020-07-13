import { getAllTransactions, postTransaction } from './bank-service';

export class BankClient {
  constructor() {}
  async deposit(amount) {
    const depositTransaction = { date: Date(), type: 'deposit', amount };
    const savedTransaction = await postTransaction(depositTransaction);
    return savedTransaction;
  }

  async withdraw(amount) {
    const withdrawTransaction = { date: Date(), type: 'withdraw', amount };
    const savedTransaction = await postTransaction(withdrawTransaction);
    return savedTransaction;
  }

  async getPosition() {
    return await getAllTransactions();
  }
}
