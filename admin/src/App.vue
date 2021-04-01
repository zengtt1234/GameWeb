<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
    //解决vuex页面刷新数据丢失问题
    created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))));
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state));
    });

    //在页面刷新的时候，动态添加路由
    this.$store.commit('addMenu',this.$router)
  }
}
</script>
<style scoped>
html,body{
  margin: 0;
  padding: 0;
}
#app{
  height: 100vh;
}
</style>
