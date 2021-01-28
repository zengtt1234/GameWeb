<template>
  <div class="login-contener">
    <el-card header='用户登陆' class="login-card">
      <!-- prevent阻止表单默认提交，不要跳转页面 -->
      <el-form @submit.native.prevent='login'>
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type='password' v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type='primary' native-type='submit'>登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      model:{}
    }
  },
  methods:{
    async login(){
      const res = await this.$http.post('login',this.model)
      //请求数据完成，获取到的应该是一个token
      //console.log(res.data);
      //将放回的token写入浏览器存储localStorage
      //localStorage浏览器关闭后还有
      localStorage.token = res.data.token
      //sessionStorage浏览器关闭后就没有了
      //sessionStorage.token = res.data.token
      this.$router.push('/')
      this.$message({
        type:'success',
        message:'登陆成功'
      })
    }
  }
}
</script>
<style scoped>
.login-contener{
  background: linear-gradient(#141e30,#243b55);
  width: 100%;
  height: 100vh;
}
.login-card{
  width: 25rem;
  margin: 5rem auto;
}
</style>