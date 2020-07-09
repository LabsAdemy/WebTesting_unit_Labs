import { sayHi } from './0-hello-world';

test('Say Hi', () => {
  expect(sayHi('Jest')).toBe('Hello Jest!');
  expect(sayHi('')).toBe('I don´t know your name');
  expect(() => sayHi(42)).toThrow('What kind of name is 42?');
});
