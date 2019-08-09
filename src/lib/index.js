export function setLocalStorage(key, value, expired) {
  if (!value && value !== 0) {
    return '';
  }
  window.localStorage.setItem(key, JSON.stringify(value));
  if (expired && Number.isInteger(expired)) {
    window.localStorage.setItem(`${key}__expires__`, Date.now() + 1000 * expired);
  }
  return value;
}

export function getLocalStorage(key) {
  const expired = window.localStorage.getItem(`${key}__expires__`);
  const now = Date.now();

  if (expired && now >= parseInt(expired, 10)) {
    removeLocalStorage(key);
    return '';
  }
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export function removeLocalStorage(key) {
  window.localStorage.removeItem(key);
  window.localStorage.removeItem(`${key}__expires__`);
}