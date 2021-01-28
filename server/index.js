const express = require('express')

const app = express()
//在express的实例上设置一个变量
//参数二应该被放到环境变量里，不应该保存到代码里，为了方便暂时写在这里
app.set('secret', 'fewc3t4354vqsdfev')

//允许跨域
app.use(require('cors')())

//中间件处理提交过来的数据
app.use(express.json())
//静态文件托管
// const path = require('path')
// app.use('/uploads',express.static(path.join(__dirname,'./uploads')))
app.use('/uploads',express.static(__dirname + '/uploads'))



require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)
app.get('/',async(req,res)=>{
  res.send("ok")
})


app.listen(3000,() => {
  console.log('http://localhost:3000!')
})