import { BankClient } from './bank-client';
let sut;
describe('GIVEN: a BankClient system', () => {
  beforeAll(() => {
    fetchMock.dontMock();
    sut = new BankClient();
  });
  test('WHEN: save a deposit THEN it posts the transaction', async () => {
    const input = 10;
    const actual = await sut.deposit(input);
    const expected = 10;
    expect(actual.amount).toEqual(expected);
    expect(actual._id).toBeDefined();
  });
});
