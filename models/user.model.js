const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {type:String,required: true},
    email : {type:String,required: true},
    address : String,
    phoneNumber : String,
    groups : [{type:mongoose.Schema.Types.ObjectId, ref: 'Group'}]
  }, { collection: 'users'})

  const User = mongoose.model('User',userSchema);

  module.exports = User 


  