const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name:{type: String},
  //用Schema.Types.ObjectId 来声明一个对象ID类型。对象ID同MongoDB内置的_id 的类型。由24位Hash字符串。
  parent:{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
})

schema.virtual('children',{//定义虚拟字段
  localField: '_id',// 内键,schema对应的模型Category的_id
  foreignField: 'parent',//外键,关联模型children的parent字段
  justOne:false,//只查询一条数据
  ref:'Category'// 关联的模型
})

schema.virtual('newsList',{
  localField: '_id',
  foreignField: 'categories',
  justOne:false,
  ref:'Article'
})
module.exports = mongoose.model('Category', schema)