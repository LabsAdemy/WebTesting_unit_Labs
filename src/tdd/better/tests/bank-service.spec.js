// FEATURE: a ban service module with functions
// As a: business level class
// I want to: have a functions to store data
// In order to: save transactions for user in other sessions

import { getAllTransactions, postTransaction } from '../bank-service';
describe('GIVEN: a connected Bank service', () => {
  beforeAll(() => {
    fetchMock.dontMock();
  });
  test('WHEN: i post a transaction THEN it returns the _id', async () => {
    const input = { date: new Date(), type: 'Deposit', amount: 10 };
    const actual = await postTransaction(input);
    expect(actual._id).toBeDefined();
  });
  test('WHEN: i ask for all transactions THEN it returns an array', async () => {
    const actual = await getAllTransactions();
    const expected = 1;
    expect(actual.length).toBeGreaterThanOrEqual(expected);
  });
});
