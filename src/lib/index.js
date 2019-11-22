import SHA1 from 'crypto-js/sha1';

import Base64 from 'crypto-js/enc-base64';

const sha1 = (string) => SHA1(string).toString();

export function setLocalStorage(key, value, expired) {
  if (!value && value !== 0) {
    return '';
  }
  window.localStorage.setItem(sha1(key), Base64.stringify(JSON.stringify(value)));
  if (expired && Number.isInteger(expired)) {
    window.localStorage.setItem(sha1(`${key}__expires__`), Base64.stringify(Date.now() + 1000 * expired));
  }
  return value;
}

export function getLocalStorage(key) {
  const expired = Base64.parse(window.localStorage.getItem(sha1(`${key}__expires__`)));
  const now = Date.now();

  if (expired && now >= parseInt(expired, 10)) {
    removeLocalStorage(sha1(key));
    return '';
  }
  const value = Base64.parse(window.localStorage.getItem(sha1(key)));
  return value ? JSON.parse(value) : null;
}

export function removeLocalStorage(key) {
  window.localStorage.removeItem(sha1(key));
  window.localStorage.removeItem(sha1(`${key}__expires__`));
}