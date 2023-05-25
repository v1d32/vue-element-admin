import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/admin/service/id',
    method: 'get',
    params: query
  })
}

export function fetchService(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createService(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateService(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
