<template>
  <div>
    <div class="digitalContener">
      <el-card shadow="hover" class="item">
        <div style="display: flex;flex-direction: column;height: 120px">
          <span class="item_num">12345</span>
          <span class="item_title">今日浏览量(次)</span>          
        </div>
      </el-card>
      <el-card shadow="hover" class="item">
        <div style="display: flex;flex-direction: column;height: 120px">
          <span class="item_num">14567</span>
          <span class="item_title">昨日浏览量(次)</span>          
        </div>
      </el-card>
      <el-card shadow="hover" class="item">
        <div style="display: flex;flex-direction: column;height: 120px">
          <span class="item_num">54321</span>
          <span class="item_title">本周累计(次)</span>          
        </div>
      </el-card>
      <el-card shadow="hover" class="item">
        <div style="display: flex;flex-direction: column;height: 120px">
          <span class="item_num">654321</span>
          <span class="item_title">本月累计(次)</span>          
        </div>
      </el-card>
    </div>
    <div>
      <div class="chart_content_one">
        <el-card shadow="hover" class="chart_one">
          <div  id="one" style="width:100px;height: 100px"></div>
        </el-card>
        <el-card shadow="hover" class="chart_two" id="two">
        </el-card>             
      </div>
    </div>
    <div>
      <el-card shadow="hover" style="height: 200px;width: 100%;margin-top: 15px" id="three">
      </el-card>      
    </div>
  </div>
  
</template>

<script>
// import Echart from '@/components/EChart'
export default {
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  created() {

  },
  mounted(){
    this.$nextTick(function(){
        // //充电桩信息圆环图表
        // initChargeChart({ domId:'initChargeChart'})
        // //充电桩充电功率图表
        // initChargeConsumptionChart({ domId: "initChargeConsumptionChart"})


    })
  },
}
</script>

<style>
.el-button--primary {
    color: #FFF;
    background-color: rgb(255, 187, 0);
    border-color: rgb(255, 187, 0)
}
.el-button--primary:hover {
    color: #FFF;
    background-color: rgb(228, 169, 9);
    border-color: rgb(255, 187, 0)
}
/* .el-button--primary:visited{
    color: #FFF;
    background-color: rgb(255, 187, 0);
    border-color: rgb(255, 187, 0)
} */
.el-button--primary:focus{
    color: #FFF;
    background-color: rgb(255, 187, 0);
    border-color: rgb(255, 187, 0)
}
.el-button--danger {
    color: #FFF;
    background-color: #ff5e00;
    border-color: #F56C6C;
}


/* .home .user{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
}
.home .user  img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
.userinfo .name {
    font-size: 32px;
    margin-bottom: 10px;
}
.userinfo .access {
    color: #999999;
}
.home .login-info p{
    line-height: 28px;
    font-size: 14px;
    color: #999999;
}
.home .login-info p span {
    color: #666666;
    margin-left: 60px;
}
.home .num{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.home .num  .el-card {
    width: 32%;
    margin-bottom: 20px;
}
.home .num  .icon {
    font-size: 30px;
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #fff;
}
.home .num .detail{
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.home .num .detail .num {
    font-size: 30px;
    margin-bottom: 10px;
}
.home .num .detail .txt {
    font-size: 14px;
    text-align: center;
    color: #999999;
}
.home .graph{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.home .graph .el-card {
    width: 48%;
} */


.digitalContener{
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
}
.digitalContener .item:nth-child(2){
  width: 23%;
  display: flex;
  /* flex-direction: row; */
  border-left: 8px #3a8ee6 solid;
  /* background: linear-gradient(90deg,#3a8de677,#3a8de600); */
  color: #3a8ee6;
}
.digitalContener .item:nth-child(3){
  width: 23%;
  display: flex;
  /* flex-direction: row; */
  border-left: 8px #6966ff solid;
    color: #6966ff;
}
.digitalContener .item:nth-child(1){
  width: 23%;
  display: flex;
  /* flex-direction: row; */
  border-left: 8px #ffcc5b solid;
  color: #ffcc5b;
}
.digitalContener .item:nth-child(4){
  width: 23%;
  display: flex;
  /* flex-direction: row; */
  border-left: 8px #ff5454 solid;
  color: #ff5454;
}
.digitalContener .item div{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.item_num{
  font-size: 24px;
  font-weight: 500;
  /* color: rgb(255, 208, 75);; */
}
.item_title{
  font-size: 16px;
  color: rgb(135, 141, 150);
  /* border-left: rgb(57, 82, 224) 5px solid; */
  /* padding-left: 5px; */
}
.chart_content_one{
  display: flex;
  justify-content: space-between;
}
.chart_one{
  width: 49%;
  height: 200px;
  margin-top: 15px
}
.chart_two{
  width: 49%;
  height: 200px;
  margin-top: 15px
}
</style>