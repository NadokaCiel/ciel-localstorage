import SHA1 from 'crypto-js/sha1';

import Utf8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';

const sha1 = (string) => SHA1(string).toString();

export function setLocalStorage(key, value, expired) {
  if (!value && value !== 0) {
    return '';
  }
  if (!key && key !== 0) {
    return '';
  }
  // console.log('value', value);
  // console.log(`JSON.stringify`, JSON.stringify(value + ''));
  // console.log(`Utf8.parse`, Utf8.parse(JSON.stringify(value + '')));
  // console.log(`Base64.stringify`, Base64.stringify(Utf8.parse(JSON.stringify(value + ''))));
  window.localStorage.setItem(sha1(key), Base64.stringify(Utf8.parse(JSON.stringify(value + ''))));
  if (expired && Number.isInteger(expired)) {
    window.localStorage.setItem(sha1(`${key}__expires__`), Base64.stringify(Utf8.parse(Date.now() + 1000 * expired)));
  }
  return value;
}

export function getLocalStorage(key) {
  const time = window.localStorage.getItem(sha1(`${key}__expires__`));
  if (!time) {
    return '';
  }
  const expired = Utf8.stringify(Base64.parse(time));
  const now = Date.now();

  if (expired && now >= parseInt(expired, 10)) {
    removeLocalStorage(sha1(key));
    return '';
  }
  const data = window.localStorage.getItem(sha1(key));
  if (!data) {
    return '';
  }
  // console.log('data', data);
  // console.log('Base64.parse', Base64.parse(data));
  // console.log('Utf8.stringify', Utf8.stringify(Base64.parse(data)));
  // console.log('value', JSON.parse(Utf8.stringify(Base64.parse(data))));
  const value = Utf8.stringify(Base64.parse(data));
  return value ? JSON.parse(value) : null;
}

export function removeLocalStorage(key) {
  if (!key && key !== 0) {
    return '';
  }
  window.localStorage.removeItem(sha1(key));
  window.localStorage.removeItem(sha1(`${key}__expires__`));
}