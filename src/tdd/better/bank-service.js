const url = 'https://api-base.herokuapp.com/api/pub/transactions/';

export { getAllTransactions, postTransaction };

async function getAllTransactions() {
  const request = createRequest(url, 'GET');
  const res = await fetch(request);
  return await getDataOrEmpty(res, []);
}

async function postTransaction(transaction) {
  const request = createRequest(url, 'POST', transaction);
  const res = await fetch(request);
  return getDataOrEmpty(res, {});
}

function createRequest(url, method = 'GET', payload = null) {
  const request = new Request(url, {
    method: method,
    body: payload ? JSON.stringify(payload) : null,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  return request;
}

async function getDataOrEmpty(res, empty) {
  const OK = 200;
  const ERR = 400;
  let result = empty;
  if (res.status >= OK && res.status < ERR) {
    const data = await res.text();
    result = data ? JSON.parse(data) : empty;
  }
  return result;
}
