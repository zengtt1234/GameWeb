//后端路由
module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')
  const assert = require('http-assert')
  //登陆校验中间件
  const authMiddleWare = require('../../middleWare/auth')
  //资源中间件
  const resourceMiddleWare = require('../../middleWare/resource')
  //express的子路由
  const router = express.Router({
    //把父级的url参数合并到router
    mergeParams: true
  })
  //const Category = require('../../models/Category')
  //创建分类接口
  router.post('/',async(req,res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
    //res.send('categories')
  })



  //修改后保存接口
  router.put('/:id',async(req,res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
    res.send(model)
    //res.send('categories')
  })



  //删除分类的接口
  router.delete('/:id',async(req,res) => {
    await req.Model.findByIdAndDelete(req.params.id,req.body)
    res.send({
      success: true
    })
  })



  //查找分类列表接口
  router.get('/',async(req,res) => {
    const queryOptions = {}
    if(req.Model.modelName === 'Category'){
      queryOptions.populate = 'parent'
    }
    //populate关联查询，获取关联对象
    //const items = await req.Model.find().populate('parent').limit(10)
    //setOptions为条件选择
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
    //res.send('categories')
  })



  //通过_id查找数据详情接口
  router.get('/:id',async(req,res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
    //res.send('categories')
  })
  
  app.use('/admin/api/rest/:resource',authMiddleWare(),resourceMiddleWare(),router)



  const multer = require('multer')
  //文件上传后存放的地址  __dirname表示绝对地址
  const upload = multer({dest: __dirname + '/../../uploads'})
  app.post('/admin/api/upload',authMiddleWare(),upload.single('file'),async(req,res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })



  //登陆的接口
  app.post('/admin/api/login',async(req,res)=>{
    const {username,password} = req.body
    //////////////////////////////////////////////////////////
    assert(username,422,'输入框不能为空')
    assert(password,422,'输入框不能为空')
    //////////////////////////////////////////////////////////
    //1.根据用户名找用户
    //由于我们在创建模型的时候，password是默认取不到的，在这里我们要取到password
    //要使用mongoose的API：Query.prototype.select()
    //const AdminUser = require('../../models/AdminUser')
    const user = await AdminUser.findOne({
      username: username
    }).select('+password')
    //抛出异常
    assert(user,422,'用户不存在')
    // if(!user){
    //   return res.status(422).send({
    //     message:'用户不存在'
    //   })
    // }
    //2.校验密码
    //第一个参数为明文，第二个参数为密文,返回值为boolean
    const isValid = require('bcrypt').compareSync(password,user.password)
    assert(isValid,422,'密码错误')
    //3.返回token
    //const jwt = require('jsonwebtoken')
    //参数二为密钥,写在全局里面了
    const token = jwt.sign({id: user._id},app.get('secret'))
    res.send({token})
  })

  //错误处理
  app.use(async(err,req,res,next) =>{
    res.status(err.statusCode || 500).send({
      message:err.message
    })
  })
}