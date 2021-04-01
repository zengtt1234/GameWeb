import Vue from 'vue'
import VueRouter from 'vue-router'
// import Main from '../views/Main'
//import Login from '../views/Login'
// import Login from '../views/Logincopy'

// import Home from "../views/About"

// import CategoryEdit from '../views/CategoryEdit'
// import CategoryList from '../views/CategoryList'

// import ItemEdit from '../views/ItemEdit'
// import ItemList from '../views/ItemList'

// import HeroEdit from '../views/HeroEdit'
// import HeroList from '../views/HeroList'

// import ArticleEdit from '../views/ArticleEdit'
// import ArticleList from '../views/ArticleList'

// import AdEdit from '../views/AdEdit'
// import AdList from '../views/AdList'

// import AdminUserEdit from '../views/AdminUserEdit'
// import AdminUserList from '../views/AdminUserList'

Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/login',
  //   name:'login',
  //   component: Login,
  //   meta:{
  //     isPublic: true
  //   }
  // },
  {
    path:'/test',
    name:'test',
    component: () => import('@/views/test'),
  },
  {
    path:'/login',
    name:'login',
    component: () => import('@/views/Logincopy'),
    meta:{
      isPublic: true
    }
  },
  // {
  //   path: '/',
  //   // name: 'Main',
  //   component: () => import('@/views/Main'),
  //   children:[
  //     {
  //       path:"/",
  //       redirect:"/home"
  //     },
  //     {
  //       path: '/home',
  //       component: () => import('@//views/About'),
  //     },
  //     {
  //       path: '/categories/create',
  //       component: () => import('@/views/CategoryEdit'),
  //     },
  //     {
  //       path: '/categories/edit/:id',
  //       component: () => import('@/views/CategoryEdit'),
  //       //把任何的Url参数注入CategoryEdit页面，例如id,CategoryEdit页面就可以使用id
  //       props:true
  //     },
  //     {
  //       path: '/categories/list',
  //       component: () => import('@/views/CategoryList')
  //     },

  //     {
  //       path: '/items/create',
  //       component: () => import('@/views/ItemEdit')
  //     },
  //     {
  //       path: '/items/list',
  //       component: () => import('@/views/ItemList')
  //     },
  //     {
  //       path: '/items/edit/:id',
  //       component: () => import('@/views/ItemEdit'),
  //       props:true
  //     },
  //     {
  //       path: '/heroes/create',
  //       component: () => import('@/views/HeroEdit')
  //     },
  //     {
  //       path: '/heroes/list',
  //       component: () => import('@/views/HeroList')
  //     },
  //     {
  //       path: '/heroes/edit/:id',
  //       component: () => import('@/views/HeroEdit'),
  //       props:true
  //     },
  //     {
  //       path: '/articles/create',
  //       component: () => import('@/views/ArticleEdit')
  //     },
  //     {
  //       path: '/articles/list',
  //       component: () => import('@/views/ArticleList')
  //     },
  //     {
  //       path: '/articles/edit/:id',
  //       component: () => import('@/views/ArticleEdit'),
  //       props:true
  //     },

  //     {
  //       path: '/ads/create',
  //       component: () => import('@/views/AdEdit')
  //     },
  //     {
  //       path: '/ads/list',
  //       component: () => import('@/views/AdList')
  //     },
  //     {
  //       path: '/ads/edit/:id',
  //       component: () => import('@/views/AdEdit'),
  //       props:true
  //     },

  //     {
  //       path: '/admin_users/create',
  //       component: () => import('@/views/AdminUserEdit')
  //     },
  //     {
  //       path: '/admin_users/list',
  //       component: () => import('@/views/AdminUserList')
  //     },
  //     {
  //       path: '/admin_users/edit/:id',
  //       component: () => import('@/views/AdminUserEdit'),
  //       props:true
  //     },
  //   ]
  // },
  // {
  //   path: '/',
  //   // name: 'Main',
  //   component: () => import('@/views/Main'),
  //   children:[
  //     {
  //       path: '/categories/edit/:id',
  //       component: () => import('@/views/CategoryEdit'),
  //       //把任何的Url参数注入CategoryEdit页面，例如id,CategoryEdit页面就可以使用id
  //       props:true
  //     },
  //     {
  //       path: '/items/edit/:id',
  //       component: () => import('@/views/ItemEdit'),
  //       props:true
  //     },
  //     {
  //       path: '/heroes/edit/:id',
  //       component: () => import('@/views/HeroEdit'),
  //       props:true
  //     },
  //     {
  //       path: '/articles/edit/:id',
  //       component: () => import('@/views/ArticleEdit'),
  //       props:true
  //     },
  //     {
  //       path: '/ads/edit/:id',
  //       component: () => import('@/views/AdEdit'),
  //       props:true
  //     },
  //     {
  //       path: '/admin_users/edit/:id',
  //       component: () => import('@/views/AdminUserEdit'),
  //       props:true
  //     },
  //   ]
  // },
]

const router = new VueRouter({
  routes
})
//全局前置路由守卫
router.beforeEach((to,from,next) => {
  //console.log(to.meta)
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})
export default router
