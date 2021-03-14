export default{
  state: {
    menu: [],
    isCollapse: false,
    currentMenu: null,
    tabsList:[
      {
        name: "home",
        path: '/home',
        label: '首页',
        icon: "el-icon-s-home"
      },
    ]
  },
  mutations: {
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
          path: '/home',
          label: '首页',
          icon: "el-icon-s-home"
        },
      ]      
    }

  },
  actions: {
  },
}