# Async tests

---

## Callbacks

`sut.js`

```js
function addAsync(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
}
```

`sut.test.js`

```js
test('add numbers async', done => {
  addAsync(10, 5, result => {
    expect(result).toBe(15);
    done();
  });
});
```

---

## Promises

`sut.js`

```js
function addAsync(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
}
```

`sut.test.js`

```js
test('should resolve to some value', () => {
  const p = Promise.resolve('some value');
  return expect(p).resolves.toBe('some value');
});

test('should reject to error', () => {
  const p = Promise.reject('error');
  return expect(p).rejects.toBe('error');
});
```

---

## Async / Await

`sut.js`

```js
function addAsync(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
}
```

`sut.test.js`

```js
test('shows how async / await works', async () => {
  const value = await Promise.resolve(true);
  expect(value).toBe(true);
});
```

---
