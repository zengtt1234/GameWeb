//后端路由
module.exports = app => {
  //定义一个express
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
      //populate关联查询，获取关联对象的完整信息，而不仅仅是一个id
      queryOptions.populate = 'parent'
    }
    //populate关联查询，获取关联对象
    //const items = await req.Model.find().populate('parent').limit(10)
    //setOptions为条件选择
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
    //res.send('categories')
  })

  //查找英雄分类列表接口
  // router.get('/',async(req,res) => {
  //   const queryOptions = {}
  //   if(req.Model.modelName === 'Category'){
  //     queryOptions.populate = 'parent'
  //   }
  //   //populate关联查询，获取关联对象
  //   //const items = await req.Model.find().populate('parent').limit(10)
  //   //setOptions为条件选择
  //   const items = await req.Model.find().setOptions(queryOptions).limit(100)
  //   res.send(items)
  //   //res.send('categories')
  // })

    //管理员查找接口
    router.get('/searchUser/:input',async(req,res) => {
      //模糊查询
      const model = await req.Model.find({
          username:{
              $regex:req.params.input
          }
      })
      res.send(model);
      //精确查询
      // const model = await req.Model.find({"username":req.params.input})
      // res.send(model);
    })

    //英雄查找接口
    router.get('/searchHero/:input',async(req,res) => {
      //模糊查询
      const model = await req.Model.find({
          name:{
              $regex:req.params.input
          }
      })
      res.send(model);
      //精确查询
      // const model = await req.Model.find({"username":req.params.input})
      // res.send(model);
    })

    //物品查找接口
    router.get('/searchItem/:input',async(req,res) => {
      //模糊查询
      const model = await req.Model.find({
          name:{
              $regex:req.params.input
          }
      })
      res.send(model);
      //精确查询
      // const model = await req.Model.find({"username":req.params.input})
      // res.send(model);
    })

    //文章标题查找接口
    router.get('/searchArticle/:input',async(req,res) => {
      //模糊查询
      const model = await req.Model.find({
          title:{
              $regex:req.params.input
          }
      })
      res.send(model);
      //精确查询
      // const model = await req.Model.find({"username":req.params.input})
      // res.send(model);
    })

    //广告位查找接口
    router.get('/searchAd/:input',async(req,res) => {
      //模糊查询
      const model = await req.Model.find({
          name:{
              $regex:req.params.input
          }
      })
      res.send(model);
      //精确查询
      // const model = await req.Model.find({"username":req.params.input})
      // res.send(model);
    })


  //通过查找数据详情接口
  router.get('/:id',async(req,res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
    //res.send('categories')
  })

  

  //将子路由router挂载上去
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
    //2.校验密码，由于我们用bcrypt对密码进行散列加密，所以用bcrypt来校验
    //compareSync检验明文和密文是否匹配，第一个参数为明文，第二个参数为密文,返回值为boolean
    const isValid = require('bcrypt').compareSync(password,user.password)
    assert(isValid,422,'密码错误')
    //3.返回token
    //const jwt = require('jsonwebtoken')
    //参数二为密钥,写在全局里面了

    //4.获取角色权限
    const role = user.role;
    var menu;
    //5.放回权限对应的路由菜单，让前端动态生成路由
    //普通管理员
    if(role === '1'){
      menu = [
        {
          name: "home",
          path: '/',
          label: '首页',
          icon: "el-icon-s-home",
          url: 'About'
        },
        {
          label: '物品管理',
          icon: "el-icon-box",
          children:[
            {
              name: "itemsList",
              path: '/items/list',
              label: '物品列表',
              url: 'ItemList'
            },
            {
              name: "itemsCreate",
              path: '/items/create',
              label: '新建物品',
              url: 'ItemEdit'
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
              url:'HeroList'
            },
            {
              name: "heroesCreate",
              path: '/heroes/create',
              label: '新建英雄',
              url:'HeroEdit'
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
              url:'ArticleList'
            },
            {
              name: "articlesCreate",
              path: '/articles/create',
              label: '新建文章',
              url: 'ArticleEdit'
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
              url:'AdList'
            },
            {
              name: "adsCreate",
              path: '/ads/create',
              label: '新建广告位',
              url: 'AdEdit'
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
              url: 'CategoryList'
            },
            {
              name: "categoriesCreate",
              path: '/categories/create',
              label: '新建分类',
              url: 'CategoryEdit'
            }
          ]          
        }
      ]
    }
    //超级管理员
    if(role === "2"){
      menu = [
        {
          name: "home",
          path: '/',
          label: '首页',
          icon: "el-icon-s-home",
          url: 'About'
        },
        {
          label: '物品管理',
          icon: "el-icon-box",
          children:[
            {
              name: "itemsList",
              path: '/items/list',
              label: '物品列表',
              url: 'ItemList'
            },
            {
              name: "itemsCreate",
              path: '/items/create',
              label: '新建物品',
              url: 'ItemEdit'
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
              url:'HeroList'
            },
            {
              name: "heroesCreate",
              path: '/heroes/create',
              label: '新建英雄',
              url:'HeroEdit'
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
              url:'ArticleList'
            },
            {
              name: "articlesCreate",
              path: '/articles/create',
              label: '新建文章',
              url: 'ArticleEdit'
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
              url:'AdList'
            },
            {
              name: "adsCreate",
              path: '/ads/create',
              label: '新建广告位',
              url: 'AdEdit'
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
              url: 'CategoryList'
            },
            {
              name: "categoriesCreate",
              path: '/categories/create',
              label: '新建分类',
              url: 'CategoryEdit'
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
              url:'AdminUserList'
            },
            {
              name: "admin_usersCreate",
              path: '/admin_users/create',
              label: '新建管理员',
              url:'AdminUserEdit'
            }
          ]          
        }
      ]

    }
    
    const token = jwt.sign({id: user._id},app.get('secret'))
    res.send({token, role, menu})
  })

  //错误处理
  app.use(async(err,req,res,next) =>{
    res.status(err.statusCode || 500).send({
      message:err.message
    })
  })
}