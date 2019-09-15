export default {
  name: 'movie',
  path: '/movie',
  component: () => import('@/views/Movie'),
  children: [
    {
      path: '/movie/city',
      name: 'city',
      component: () => import('@/components/City')
    },
    {
      path: '/movie/nowPlaying',
      name: 'playing',
      component: () => import('@/components/NowPlaying')
    },
    {
      path: '/movie/comingSoon',
      name: 'ComingSoon',
      component: () => import('@/components/ComingSoon')
    },
    {
      path: '/movie/search',
      name: 'Search',
      component: () => import('@/components/Search')
    },
    {
      path: '/movie/',
      redirect: '/movie/nowPlaying'
    },
    {
      path: '/movie/detail/:movieId',
      components: {
        detail: () => import('@/views/Movie/detail')
      },
      props: {
        detail: true
      }
    }
  ]
}