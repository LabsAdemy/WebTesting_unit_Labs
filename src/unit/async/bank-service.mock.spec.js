import { getAllTransactions } from './bank-service';

describe('GIVEN: a disconnected Bank service', () => {
  beforeAll(() => {
    fetchMock.doMock();
  });
  test('WHEN: i ask for all transactions THEN it returns an empty array', async () => {
    const actual = await getAllTransactions();
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe('GIVEN: a mocked Bank service', () => {
  beforeAll(() => {
    fetchMock.doMock();
    fetch.mockResponseOnce(
      JSON.stringify([
        { id: 1, amount: 1 },
        { id: 2, amount: 20 },
      ])
    );
  });
  test('WHEN: i ask for all transactions THEN it returns the expected array', async () => {
    const actual = await getAllTransactions();
    const expected = [
      { id: 1, amount: 1 },
      { id: 2, amount: 20 },
    ];
    expect(actual).toEqual(expected);
  });
});
