# Mocks

---

## Mocks

`sut.js`

```js
function greetTheWorld(getGreeting) {
  return getGreeting('world');
}
```

`sut.test.js`

```js
test('greetTheWorld calls the greeting function properly', () => {
  const greetImplementation = name => `Hello ${name}!`;
  const mockGreeting = jest.fn(greetImplementation);
  const value = greetTheWorld(mockGreeting);
  expect(mockGreeting).toHaveBeenCalled();
  expect(mockGreeting).toHaveBeenCalledWith('world');
  expect(value).toBe('Hello world!');
});
```
