/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const serviceRouter = {
  path: '/service',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/service/index'),
      name: 'Service',
      meta: { title: 'Service', icon: 'el-icon-star-on' }
    }
  ]
}
export default serviceRouter
