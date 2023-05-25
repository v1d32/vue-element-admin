import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/v1/oauth/token/id',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/profile/id',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/auth/logout/id',
    method: 'post'
  })
}
