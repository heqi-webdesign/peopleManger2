import Layout from '@/layout'

export default {
  path: '',
  component: Layout,
  redirect: '/salarys',
  children: [
    {
      path: 'salarys',
      name: 'salarys',
      component: () => import('@/views/salarys'),
      meta: { title: 'salarys', icon: 'dashboard' }
    }
  ]
}
