<template>
  <div class="about">
    <h1>管理员列表</h1>
    <el-table :data="items" v-loading='loading'>
      <el-table-column label="序号">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.$index }}</span>
        </template>
      </el-table-column>


      <!-- <el-table-column prop="_id" label="ID" width='220'>
      </el-table-column> -->

      <el-table-column prop="username" label="用户名">
      </el-table-column>


      <el-table-column prop="createdAt" label="创建时间" :formatter="dateFormat">
      </el-table-column>
      <el-table-column prop="updatedAt" label="修改时间" :formatter="dateFormat">
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
import dayjs from 'dayjs'
export default {
  // filters:{
  //   date(val){
  //     return dayjs(val).format('MM/DD')
  //   }
  // },
  data(){
    return{
      items:[],
      loading: false
    }
  },
  methods:{
    async fetch(){
      const res =await this.$http.get('rest/admin_users')
      this.items = res.data;
      //console.log(this.items)
    },
    async remove(row){
      this.$confirm(`是否确定删除"${row.username}"?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await this.$http.delete(`rest/admin_users/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
           this.fetch()
        })
    },
    dateFormat(row, column){
      return dayjs(row[column.property]).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  created(){
    this.fetch()
  }
}
</script>
