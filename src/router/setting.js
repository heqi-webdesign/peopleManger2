import Layout from '@/layout'

export default {
  path: '',
  component: Layout,
  redirect: '/setting',
  children: [
    {
      path: 'setting',
      name: 'setting',
      component: () => import('@/views/setting'),
      meta: { title: 'setting', icon: 'dashboard' }
    }
  ]
}
