module.exports = app =>{
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://localhost:27017/node-vue-moba',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  mongoose.set('useFindAndModify', false);

  //npm i require-all 安装插件
  //把数据库里面的模型全部引用了一遍
  require('require-all')(__dirname + '/../models')
}