<template>
  <header>
    <div class="l_content">
      <i
        :class="isCollapseMenu ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
        :title="isCollapseMenu ? '收起' : '展开'"
        class="fold-unfold"
        @click="collapseMenu"
      ></i>
      <!-- <el-button icon="el-icon-menu" size="mini" plain style="margin-right:20px" @click="collapseMenu"></el-button> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{current.label}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r_content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item>个人中心</el-dropdown-item> -->
          <el-dropdown-item @click.native="exit">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>


    <!-- <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
          <el-dropdown-item>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header> -->
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState({
      current: state => state.tab.currentMenu,
      // userName: state => state.user.currentUser,
    }),

  },
  data(){
    return{
      isCollapseMenu: "false",
      userName: localStorage.currentUser
    }
  },
  methods:{
    collapseMenu(){
      this.$store.commit("collapseMenu")
      this.isCollapseMenu = !this.isCollapseMenu;
    },
    exit(){
      //清除token
      this.$store.commit("clearToken")
      //清除用户名
      this.$store.commit("clearCurrentUser")
      //把tab清空
      this.$store.commit("resetTabsList")
      //清空权限列表
      this.$store.commit("clearMenu")
      //刷新浏览页面
      location.reload();

      
    }    
  }
}
</script>
<style scoped>
.el-header {
  /* background-color: #B3C0D1; */
  color: #333;
  line-height: 60px;
  width: 100%;
}
header{
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}
.fold-unfold{
  cursor: pointer;
  margin-right: 20px;
}
.l_content{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
<style>
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
  color: #666666;
  font-weight: normal;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner{
  color: #666666;
  font-weight: 700;
}
.tabs .el-tag{
  cursor: pointer;
}
</style>
