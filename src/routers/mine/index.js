export default {
  name: 'mine',
  path: '/mine',
  redirect: 'personCenter',
  component: () => import('@/views/Mine'),
  children:[
    {
      name: 'login',
      path: 'login',
      component: () => import('@/components/Login')
    },
    {
      name: 'register',
      path: 'register',
      component: () => import('@/components/Register')
    },
    {
      name: 'findPassword',
      path: 'findpassword',
      component: () => import('@/components/FindPassword')
    },
    {
      name: 'personCenter',
      path: 'personCenter',
      component: () => import('@/components/PersonCenter')
    },
    {
      path: '/mine',
      redirect: 'personCenter'
    }
  ]
}