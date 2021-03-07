<template>
  <div class="tabs">
    <el-tag
      :key="tag.name"
      v-for="tag in tags"
      :closable = "tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      size="small"
      @click="changeMenu(tag)"
      :effect="$route.path === tag.path ? 'dark' : 'plain'">
      {{tag.label}}
    </el-tag>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
  export default {
    computed:{
      ...mapState({
        tags: state => state.tab.tabsList
      }),
    },
    data() {
      return {
        // dynamicTags: ['标签一', '标签二', '标签三'],
        // inputVisible: false,
        // inputValue: ''
      };
    },
    methods: {
      ...mapMutations({
        close: 'closeTab'
      }),      
      handleClose(tag) {
        if(this.$route.path === tag.path){
          //如果关闭的页面为激活状态，则关闭后跳转到前一个标签的路由
          let result = this.$store.state.tab.tabsList.findIndex(item => item.path === tag.path)
          this.changeMenu(this.$store.state.tab.tabsList[result-1])
        }
        this.close(tag);
      },
      changeMenu(item){
        this.$router.push({ path: item.path})
        this.$store.commit('selectMenu', item)
        //console.log(this.$route.path);
      }
    }
  }
</script>
<style>
.tabs{
  padding: 20px;
}
.tabs .el-tag{
  margin-right: 15px;
}

.el-tag--plain{
    background-color: #fff;
    border-color: rgb(255, 208, 75);
    color: rgb(255, 208, 75);
}
.el-tag--plain .el-tag__close {
    color: rgb(255, 208, 75);
}
.el-tag--plain .el-tag__close:hover{
    background: rgb(255, 187, 0);
}
.el-tag--dark {
  background-color: rgb(255, 208, 75);
  border-color: rgb(255, 208, 75);
  color: #fff;
}
.el-tag--dark .el-tag__close:hover{
    background: rgb(255, 187, 0);
}
</style>