module.exports = options =>{
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../models/AdminUser')
  const assert = require('http-assert')

  return async (req,res,next) =>{
    //pop表示提取数组最后一个元素
    const token = String(req.headers.authorization ||'').split(' ').pop()
    //对token进行解密
    assert(token,401,'请先登陆')
    const {id} = jwt.verify(token,req.app.get('secret'))
    //console.log(id)
    //const user = await AdminUser.findById(id)
    //要想user在后续的处理函数中用，要将其挂载在req或者res对象上去
    assert(id,401,'请先登陆')
    req.user = await AdminUser.findById(id)
    assert(req.user,401,'请先登陆')
    await next()
  }
}