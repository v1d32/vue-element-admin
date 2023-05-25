import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(data) {
  return Cookies.set(TokenKey, data.token_type + ' ' + data.access_token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
