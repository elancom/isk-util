const tkKey = 'token';
const secKey = 'st';

export function getToken() {
  return getItem(tkKey) || ''
}

export function setToken(token: string) {
  setItem('token', token)
}

export function removeToken() {
  removeItem('token')
}

export function getSecret() {
  let s = getItem(secKey) || '';
  return s.split('').reverse().join('')
}

export function setSecret(secret: string) {
  setItem(secKey, secret.split('').reverse().join(''))
}

export function removeSecret() {
  removeItem(secKey)
}

export function getItem(key: string) {
  return localStorage.getItem(key) || ''
}

export function setItem(key: string, value: string) {
  localStorage.setItem(key, value)
}

export function removeItem(key: string) {
  localStorage.removeItem(key)
}
