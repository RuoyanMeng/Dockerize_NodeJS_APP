const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name : {type:String,required: true},
    description : {type:String,required: true},
    type : {type:String,required: true, enum: ["Personal","Group"]},
    members : {type:[mongoose.Schema.Types.ObjectId], ref: 'User', required: true}
  }, { collection: 'projects'})

  const Project = mongoose.model('Project',projectSchema);

  module.exports = Project