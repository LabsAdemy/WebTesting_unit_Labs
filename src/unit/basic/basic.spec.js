import { basic } from './basic';

test('basic exists', () => {
  expect(basic).toBeDefined();
});

test('basic balance is 0', () => {
  expect(basic.balance).toEqual(0);
});

describe('GIVEN: a basic object', () => {
  test('WHEN: read the balance THEN returns 0', () => {
    expect(basic.balance).toEqual(0);
  });
  test('WHEN: make a deposit of 6 THEN should have a balance of 6', () => {
    const input = 6;
    basic.deposit(input);
    const actual = basic.balance;
    const expected = 6;
    expect(actual).toEqual(expected);
  });
});

describe('GIVEN: a basic object with a previous balance of 6', () => {
  beforeEach(() => {
    basic.balance = 0;
    const input = 6;
    basic.deposit(input);
  });
  test('WHEN: make a withdraw of 4 THEN should have a balance of 2', () => {
    const input = 4;
    basic.withdraw(input);
    const actual = basic.balance;
    const expected = 2;
    expect(actual).toEqual(expected);
  });
});

describe('GIVEN: a basic object with a previous balance of 10 WHEN: i ask for a borrow of 4', () => {
  beforeAll(() => {
    arrangeBalance();
    const input = 4;
    actBorrow(input);
  });
  test('THEN should have a balance of 14', assertBalance);
  test('AND THEN should have disposed of 4', assertDisposed);
});
describe('GIVEN: a basic object with a previous balance of 10 WHEN: i ask for a borrow of 40', () => {
  beforeAll(() => {
    arrangeBalance();
  });
  test('THEN should receive an error', assertDisposedThrowsError);
});
function arrangeBalance() {
  const input = 10;
  basic.balance = input;
}
function actBorrow(input) {
  basic.borrow(input);
}
function assertBalance() {
  const actual = basic.balance;
  const expected = 14;
  expect(actual).toEqual(expected);
}
function assertDisposed() {
  const actual = basic.disposed;
  const expected = 4;
  expect(actual).toEqual(expected);
}
function assertDisposedThrowsError() {
  const input = 14;
  expect(() => actBorrow(input)).toThrow();
}
