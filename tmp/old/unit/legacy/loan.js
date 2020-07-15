export class Loan {
  constructor(credit) {
    this._credit = credit;
    this._disposed = 0;
  }
  borrow(amount) {
    if (this.isAllowed(amount)) {
      this._disposed += amount;
    }
    throw "you can't request so much credit";
  }
  payBack(amount) {
    this._disposed -= amount;
  }
  isAllowed(amount) {
    return this._credit - this._disposed > amount;
  }
  getDisposed() {
    return this._disposed;
  }
}
