export default{
  state: {
    //从后端获取的权限路由菜单
    menu: [],
    isCollapse: false,
    currentMenu: null,
    tabsList:[
      {
        name: "home",
        path: '/',
        label: '首页',
        icon: "el-icon-s-home"
      },
    ],
    //各个编辑页面的路由
    
  },
  mutations: {
    setMenu(state, val){
      state.menu = val
    },
    // getMenu(state){
    //   state.menu = localStorage.getItem("menu");
    // },
    clearMenu(state){
      state.menu = [],
      localStorage.clear('menu');
    },
    // addMenu(state, router){
    //   let menu = JSON.parse(localStorage.menu);
    //   if(!menu){
    //     return
    //   }
    //   state.menu = menu
    //   let currentMenu = [
    //     {
    //       path:'/',
    //       component: () => import(`@/views/About`),
    //       children:[]
    //     }
    //   ]
    //   console.log(menu)
    //   menu.forEach(item => {
    //     if(item.children){
    //       item.children = item.children.map(item => {
    //         item.component = () => import(`@/views/${item.url}`)
    //         return item
    //       })
    //       currentMenu[0].children.push(...item.children)
    //     }else{
    //       item.component = () => import(`@/views/${item.url}`)
    //       currentMenu[0].children.push(item)
    //     }
    //   });
    //   // console.log(currentMenu)
    //   router.addRoutes(currentMenu)
    //   // console.log(router);
    // },
    //动态添加菜单
    addMenu(state,router){
    if(!localStorage.menu) return
    var  menu = JSON.parse(localStorage.menu);
    // if(!menu) return
    state.menu = menu
    var currentMenu = [
        {
            path:'/',
            component:() => import(`@/views/Main.vue`),
            children:[]
        }
    ]

    menu.forEach(item =>{
        if(item.children){
            item.children = item.children.map(item =>{
                item.component = () => import(`@/views/${item.url}`)
                return item
            })
            currentMenu[0].children.push(...item.children)
        }else{
            item.component = () => import(`@/views/${item.url}`)
            currentMenu[0].children.push(item)
        }
    })
    var editList=[
      {
        path: '/categories/edit/:id',
        component: () => import('@/views/CategoryEdit'),
        //把任何的Url参数注入CategoryEdit页面，例如id,CategoryEdit页面就可以使用id
        props:true
      },
      {
        path: '/items/edit/:id',
        component: () => import('@/views/ItemEdit'),
        props:true
      },
      {
        path: '/heroes/edit/:id',
        component: () => import('@/views/HeroEdit'),
        props:true
      },
      {
        path: '/articles/edit/:id',
        component: () => import('@/views/ArticleEdit'),
        props:true
      },
      {
        path: '/ads/edit/:id',
        component: () => import('@/views/AdEdit'),
        props:true
      },
      {
        path: '/admin_users/edit/:id',
        component: () => import('@/views/AdminUserEdit'),
        props:true
      },
    ]
    editList.forEach(item => {
      currentMenu[0].children.push(item)
    })
    // console.log(currentMenu,'cur')
    router.addRoutes(currentMenu)
},
    selectMenu(state, val){
      if(val.name !== "home"){
        state.currentMenu = val
        let result = state.tabsList.findIndex(item => item.name === val.name)
        result === -1 ? state.tabsList.push(val) : ''        
      }else{
        state.currentMenu = null
      }
      //val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
    },
    closeTab(state, val){
      let result = state.tabsList.findIndex(item => item.name === val.name)
      //console.log(state.tabsList)
      state.tabsList.splice(result, 1)
      //console.log(state.tabsList)
    },
    collapseMenu(state){
      state.isCollapse = !state.isCollapse;
    },
    resetTabsList(state){
      state.tabsList = [
        {
          name: "home",
          path: '/',
          label: '首页',
          icon: "el-icon-s-home"
        },
      ]      
    }

  },
  actions: {
  },
}