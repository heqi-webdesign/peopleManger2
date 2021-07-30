import Layout from '@/layout'

export default {
  path: '',
  component: Layout,
  redirect: '/permission',
  children: [
    {
      path: 'permission',
      name: 'permission',
      component: () => import('@/views/permission'),
      meta: { title: 'permission', icon: 'dashboard' }
    }
  ]
}
