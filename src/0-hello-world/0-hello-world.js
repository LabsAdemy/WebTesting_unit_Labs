export function sayHi(userName) {
  if (isNotAString(userName)) {
    throw `What kind of name is ${userName}?`;
  }
  if (isEmpty(userName)) {
    return `I don´t know your name`;
  }
  return `Hello ${userName}!`;
}

function isNotAString(userName) {
  return typeof userName !== 'string' && !(userName instanceof String);
}

function isEmpty(userName) {
  return userName.length === 0;
}
