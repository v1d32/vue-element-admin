import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/admin/user/id',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: '/admin/transaction/id?service_type=Membership',
    method: 'get',
    params: query
  })
}
