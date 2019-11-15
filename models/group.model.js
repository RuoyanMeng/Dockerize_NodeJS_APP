const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({
    name : {type:String,required: true},
    owner: {type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
  }, { collection: 'groups'})

  const Group = mongoose.model('Group',groupSchema);

  module.exports = Group
  