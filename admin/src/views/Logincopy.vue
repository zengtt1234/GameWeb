<template>
  <div class="outer">
    <div class="box">
      <div class="img">
        <img width="100%" height="100%" src="~@/assets/img/login/bg.jpeg">
      </div>
      <div class="from">
        <div class="login">
          <h2>后台管理系统</h2>
          <div class="login_box">
            <input type="text" required="required" v-model="model.username">
            <label>用户名</label>
          </div>
          <div class="login_box">
            <input type="password" required="required" v-model="model.password">
            <label>密码</label>
          </div>
          <a style="cursor: pointer;" href="javascript:void(0)" @click="login">
            登陆
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <!-- <el-card header='用户登陆' class="login-card">
          
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
        prevent阻止表单默认提交，不要跳转页面 -->
      </div>
    </div>
  </div>

  <!-- <div class="login-contener">
    <div class="login">
      <h2>用户登陆</h2>
      <div class="login_box">
        <input type="text" required="required" v-model="model.username">
        <label>用户名</label>
      </div>
      <div class="login_box">
        <input type="password" required="required" v-model="model.password">
        <label>密码</label>
      </div>
      <a style="cursor: pointer;" href="javascript:void(0)" @click="login">
        登陆
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <el-card header='用户登陆' class="login-card">
      
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
    prevent阻止表单默认提交，不要跳转页面
  </div> -->
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
      console.log(res.data);

      //将放回的token写入浏览器存储localStorage
      //localStorage浏览器关闭后还有

      //将token和用户名保存到localStorage
      localStorage.token = res.data.token;
      localStorage.currentUser = this.model.username;

      //将token和用户名保存到vuex
      this.$store.commit('setToken', res.data.token);
      this.$store.commit("setCurrentUser",this.model.username);

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
<style>
.outer{
 width:100%;
 height: 100vh;
 background: #ff9d003d;
}
.box{
  width: 70%;
  height: 70%;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 2px 2px 10px #909090;
}
.box .img{
  flex: 1;
  border-radius: 5px;
  background-color: red;
  border-radius: 5px;
}
.box .img img{
  border-radius: 5px;
}
.box .from{
  flex: 1;
  border-radius: 5px;
  background-color: #fff;
  /* background: #db9f3f5b; */
}
/* .login-contener{
  background: linear-gradient(#141e30,#243b55);
}
.login-card{
  width: 25rem;
  margin: 5rem auto;
} */
.login-contener{
  background: linear-gradient(#141e30,#243b55);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  
  /* background: url('~@/assets/img/login/bg.jpg') no-repeat ;
  background-size: 100% 100%;
  background-position: left top -72px; */
}
.login{
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 30.7692rem; */
  /* background: linear-gradient(#141e30,#243b55); */
  padding: 3.0769rem;

}
.login h2{
  color: #db9e3f;
  margin-bottom: 2.3077rem;
}
.login .login_box{
  position: relative;
  width: 100%;
}
.login .login_box input{
  outline: none;
  border: none;
  width: 100%;
  padding: 0.7692rem 0;
  margin-bottom: 2.3077rem;
  color: #db9e3f;
  font-size: 1.2308rem;
  border-bottom: 0.0769rem solid #db9e3f;
  background-color: transparent;
}
.login .login_box label{
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.7692rem 0;
  color: #db9e3f;
  pointer-events: none;
  transition: all 0.5s;
}
.login .login_box input:focus + label,
.login .login_box input:valid + label
{
  top:-1.5385rem;
  color:#db9e3f;
  font-size: 0.9231rem;
}
.login a{
  position: relative;
  padding: 0.7692rem 1.5385rem;
  color: #db9e3f;
  text-decoration: none;
  transition: all 0.5s;
  overflow: hidden;
}
.login a:hover{
  color: #fff;
  border-radius: 5px;
  background-color: #db9e3f;
  box-shadow: 0 0 0.3846rem #db9e3f,0 0 1.9231rem #db9e3f,0 0 0.3846rem #db9e3f,0 0 1.9231rem #db9e3f,;
}
.login a span{
  position: absolute;
}
.login a span:first-child{
  top: 0;
  left: -100%;
  width: 100%;
  height: 0.1538rem;
  background: linear-gradient(to right, transparent, #db9e3f);
  animation: move1 1s linear infinite;
}
.login a span:nth-child(2){
  right: 0;
  top: -100%;
  width: 0.1538rem;
  height: 100%;
  background: linear-gradient(transparent, #db9e3f);
  animation: move2 1s linear 0.25s infinite;
}
.login a span:nth-child(3){
  right: -100%;
  bottom: 0;
  width: 100%;
  height: 0.1538rem;
  background: linear-gradient(to left,transparent, #db9e3f);
  animation: move3 1s linear 0.5s infinite;
}
.login a span:last-child{
  left: 0;
  bottom: -100%;
  width: 0.1538rem;
  height: 100%;
  background: linear-gradient(#db9e3f, transparent);
  animation: move4 1s linear 0.75s infinite;
}
@keyframes move1{
  0%{
    left: -100%;
  }
  50%,100%{
    left: 100%;
  }
}
@keyframes move2{
  0%{
    top: -100%;
  }
  50%,100%{
    top: 100%;
  }
}
@keyframes move3{
  0%{
    right: -100%;
  }
  50%,100%{
    right: 100%;
  }
}
@keyframes move4{
  0%{
    bottom: -100%;
  }
  50%,100%{
    bottom: 100%;
  }
}
</style>