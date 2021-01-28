module.exports = options =>{
  return async(req,res,next) => {
    //inflection可以把英文改成首字母大写，并且为单数的类名
    const modelName = require('inflection').classify(req.params.resource)
    //return res.send({modelName})
    //req.Model表示在请求上挂载一个Model
    req.Model = require(`../models/${modelName}`)
    next()
  }
}