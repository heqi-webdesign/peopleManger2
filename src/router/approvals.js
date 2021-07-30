import Layout from '@/layout'

export default {
  path: '',
  component: Layout,
  redirect: '/approvals',
  children: [
    {
      path: 'approvals',
      name: 'approvals',
      component: () => import('@/views/approvals'),
      meta: { title: 'approvals', icon: 'dashboard' }
    }
  ]
}
