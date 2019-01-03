import Home from '@/views/Home.vue'

const apppage = {
  path: '/',
  name: 'app'
}
const homepage = {
  path: '/home',
  name: 'home',
  component: Home
}

const aboutpage = {
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
}

const testpage = {
  path: '/test',
  name: 'test',
  component: () => import(/* webpackChunkName: "about" */ '@/views/main-page/Home2.vue')
}

export const routes = [apppage, homepage, aboutpage, testpage]
