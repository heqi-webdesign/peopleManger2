import Layout from '@/layout'

export default {
  path: '',
  component: Layout,
  redirect: '/departments',
  children: [
    {
      path: 'departments',
      name: 'departments',
      component: () => import('@/views/departments'),
      meta: { title: 'departments', icon: 'dashboard' }
    }
  ]
}
