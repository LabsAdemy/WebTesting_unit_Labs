import { BankClient } from '../bank-client';
import { postTransaction } from '../bank-service';
jest.mock('../bank-service');
let sut;

describe('GIVEN: a BankClient class', () => {
  beforeAll(() => {
    const fake = { _id: 42, amount: 10 };
    postTransaction.mockReturnValue(Promise.resolve(fake));
    sut = new BankClient();
  });
  test('WHEN: save a deposit THEN it posts the transaction', async () => {
    const input = 10;
    const actual = await sut.deposit(input);
    console.log({ actual });
    const expected = 10;
    expect(actual.amount).toEqual(expected);
    expect(actual._id).toBeDefined();
  });
});
