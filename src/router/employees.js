import Layout from '@/layout'

export default {
  path: '',
  component: Layout,
  redirect: '/employees',
  children: [
    {
      path: 'employees',
      name: 'employees',
      component: () => import('@/views/employees'),
      meta: { title: 'employees', icon: 'dashboard' }
    }
  ]
}
