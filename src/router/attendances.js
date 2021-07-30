import Layout from '@/layout'

export default {
  path: '',
  component: Layout,
  redirect: '/attendances',
  children: [
    {
      path: 'attendances',
      name: 'attendances',
      component: () => import('@/views/attendances'),
      meta: { title: 'attendances', icon: 'dashboard' }
    }
  ]
}
