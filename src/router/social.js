import Layout from '@/layout'

export default {
  path: '',
  component: Layout,
  redirect: '/social',
  children: [
    {
      path: 'social',
      name: 'social',
      component: () => import('@/views/social'),
      meta: { title: 'social', icon: 'dashboard' }
    }
  ]
}
