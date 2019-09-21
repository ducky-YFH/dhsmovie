export default {
  path: '/admin',
  component: () => import('@/views/admin'),
  children:[
    {
      name: 'user',
      path: 'user',
      component: () => import('@/views/admin/user')
    },
    {
      name: 'theater',
      path: 'theater',
      component: () => import('@/views/admin/theater')
    },
    {
      name: 'movie',
      path: 'movie',
      component: () => import('@/views/admin/movie')
    },
    {
      path: '/admin',
      redirect: 'user'
    }
  ]
}
