<template>
  <el-menu router  class="el-menu-vertical-demo" collapse-transition unique-opened :default-active='$route.path' background-color="#282c34" text-color="#fff" active-text-color="#ffd04b" :collapse='isCollapse'>
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <i :class="item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>   
    <el-submenu v-for="(item, index) in hasChildren" :key="index" :index="index + ''">
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
          <span slot="title">{{subItem.label}}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>


    <!-- <el-menu-item index="/home" @click="clickMenu">
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-files"></i>内容管理</template>
      <el-menu-item-group>
        <template slot="title">物品</template>
        <el-menu-item index="/items/create">新建物品</el-menu-item>
        <el-menu-item index="/items/list">物品列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">英雄</template>
        <el-menu-item index="/heroes/create">新建英雄</el-menu-item>
        <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">文章</template>
        <el-menu-item index="/articles/create">新建文章</el-menu-item>
        <el-menu-item index="/articles/list">文章列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-suitcase"></i>运营管理</template>
      <el-menu-item-group>
        <template slot="title">广告位</template>
        <el-menu-item index="/ads/create">新建广告位</el-menu-item>
        <el-menu-item index="/ads/list">广告位列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
      <el-menu-item-group>
        <template slot="title">分类</template>
        <el-menu-item index="/categories/create">新建分类</el-menu-item>
        <el-menu-item index="/categories/list">分类列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">管理员</template>
        <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
        <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu> -->
    <!-- <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>内容管理</template>
      <el-menu-item-group>
        <template slot="title">物品</template>
        <el-menu-item index="/items/create">新建物品</el-menu-item>
        <el-menu-item index="/items/list">物品列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">英雄</template>
        <el-menu-item index="/heroes/create">新建英雄</el-menu-item>
        <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">文章</template>
        <el-menu-item index="/articles/create">新建文章</el-menu-item>
        <el-menu-item index="/articles/list">文章列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-message"></i>运营管理</template>
      <el-menu-item-group>
        <template slot="title">广告位</template>
        <el-menu-item index="/ads/create">新建广告位</el-menu-item>
        <el-menu-item index="/ads/list">广告位列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-message"></i>系统设置</template>
      <el-menu-item-group>
        <template slot="title">分类</template>
        <el-menu-item index="/categories/create">新建分类</el-menu-item>
        <el-menu-item index="/categories/list">分类列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">管理员</template>
        <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
        <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu> -->
  </el-menu>
</template>
<script>
export default {
  methods:{
    clickMenu(item){
      this.$store.commit('selectMenu', item)
    }
  },
  computed:{
    noChildren(){
      return this.asideMenu.filter(item => !item.children);
    },
    hasChildren(){
      return this.asideMenu.filter(item => item.children);
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse;
    }
  },
  data(){
    return{
      asideMenu:[
        {
          name: "home",
          path: '/home',
          label: '首页',
          icon: "el-icon-s-home"
        },
        {
          label: '物品管理',
          icon: "el-icon-box",
          children:[
            {
              name: "itemsList",
              path: '/items/list',
              label: '物品列表',
            },
            {
              name: "itemsCreate",
              path: '/items/create',
              label: '新建物品',
            }
          ]          
        },
        {
          label: '英雄管理',
          icon: "el-icon-trophy",
          children:[
            {
              name: "heroesList",
              path: '/heroes/list',
              label: '英雄列表',
            },
            {
              name: "heroesCreate",
              path: '/heroes/create',
              label: '新建英雄',
            }
          ]          
        },
        {
          label: '文章管理',
          icon: "el-icon-document",
          children:[
            {
              name: "articlesList",
              path: '/articles/list',
              label: '文章列表',
            },
            {
              name: "articlesCreate",
              path: '/articles/create',
              label: '新建文章',
            }
          ]          
        },
        {
          label: '广告位管理',
          icon: "el-icon-postcard",
          children:[
            {
              name: "adsList",
              path: '/ads/list',
              label: '广告位列表',
            },
            {
              name: "adsCreate",
              path: '/ads/create',
              label: '新建广告位',
            }
          ]          
        },
        {
          label: '分类管理',
          icon: "el-icon-files",
          children:[
            {
              name: "categoriesList",
              path: '/categories/list',
              label: '分类列表',
            },
            {
              name: "categoriesCreate",
              path: '/categories/create',
              label: '新建分类',
            }
          ]          
        },
        {
          label: '管理员管理',
          icon: "el-icon-s-custom",
          children:[
            {
              name: "admin_usersList",
              path: '/admin_users/list',
              label: '管理员列表',
            },
            {
              name: "admin_usersCreate",
              path: '/admin_users/create',
              label: '新建管理员',
            }
          ]          
        },
      ]
    }
  }
}
</script>
<style>
.el-menu{
  height: 100%;
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}
</style>