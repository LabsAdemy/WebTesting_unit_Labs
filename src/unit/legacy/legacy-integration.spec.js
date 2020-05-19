import { BankClient } from './bank-client';

let sutBankClient;
describe('GIVEN: a new BankClient WHEN: i deposit 20', () => {
  beforeAll(() => {
    const inputCredit = 100;
    const inputAmount = 20;
    arrangeBank(inputCredit);
    actDeposit(inputAmount);
  });
  test('THEN should have a balance of 20', assertBalance);
});
function arrangeBank(input) {
  sutBankClient = new BankClient(input);
}
function actDeposit(input) {
  sutBankClient.deposit(input);
}
function assertBalance() {
  const actual = sutBankClient.getPosition();
  const expected = 20;
  expect(actual).toEqual(expected);
}
