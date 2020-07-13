import { BankClient } from './0-bank-client';
describe(`GIVEN a Bank Client class`, () => {
  test(`THEN I can create an instance`, () => {
    const sut = new BankClient();
    expect(sut).toBeInstanceOf(BankClient);
  });
});
