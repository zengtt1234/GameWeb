<template>
  <div class="about">
    <span class="search_item">文章标题:</span>
    <el-input v-model="input" placeholder="请输入文章标题" style="width: 140px;margin-right: 10px" size="mini" @change="fetch" clearable></el-input>
    <el-button type="primary"  @click="search"  size="mini">搜索</el-button>
    <!-- <h1>文章列表</h1> -->
    <el-table :data="items">
      <el-table-column label="序号">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.$index }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="_id" label="ID" width='220'>
      </el-table-column> -->
      <el-table-column prop="title" label="文章标题">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope='scope'>
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
        <el-button type="primary" size="small" 
        @click="$router.push(`edit/${scope.row._id}`)">编辑</el-button>
        <el-button type="danger" size="small" 
        @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data(){
    return{
      input:'',
      items:[]
    }
  },
  methods:{
    async fetch(){
      const res =await this.$http.get('rest/articles')
      this.items = res.data
      console.log(res.data);
    },
    async search(){
      if(this.input){
        const res =await this.$http.get(`rest/articles/searchArticle/${this.input}`)
        this.items = res.data;
        console.log(res.data);
      }
      else{
        this.$message({
          message: "输入框不能为空！",
          type: "warning"
        });
        return;
      }
    },
    async remove(row){
      this.$confirm(`是否确定删除文章"${row.title}"?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await this.$http.delete(`rest/articles/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
           this.fetch()
        })
    }
  },
  created(){
    this.fetch()
  }
}
</script>
<style scoped>
.search_item{
  font-size: 14px;
  color: #909399;
  padding-right: 10px;
}
</style>
