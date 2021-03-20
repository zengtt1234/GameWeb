const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username:{type: String},
  role:{type: String},
  password:{
    type:String,
    select:false,
    set(val){
      return require('bcrypt').hashSync(val,10)
    }
  }
},{ timestamps:true })

module.exports = mongoose.model('AdminUser', schema)