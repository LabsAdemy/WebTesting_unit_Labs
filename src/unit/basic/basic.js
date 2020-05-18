export const basic = {
  balance: 0,
  disposed: 0,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    this.balance -= amount;
  },
  borrow(amount) {
    if (amount + this.disposed > this.balance) {
      throw "you can't request so much credit";
    }
    this.disposed += amount;
    this.balance += amount;
  },
  payBack(amount) {
    this.deposit -= amount;
    this.balance -= amount;
  },
};

/*
TASKS TO DO:

- Write a test for the payBackMethod
- Correct the error

*/
