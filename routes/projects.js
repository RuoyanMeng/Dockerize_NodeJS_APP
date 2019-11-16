const router = require('express').Router();
// let User = require('../models/user.model');
let Group = require('../models/group.model');
let Project = require('../models/projects.model')

router.route('/project').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const type = req.body.type;
    const members = req.body.members;

    const newProject = new Project({
        name,
        description,
        type,
        members
    });
  
    newProject.save()
      .then(project => res.status(201).json({message:'Project successfully created',id:project._id}))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/project/:id').get((req, res) => {
    Project.findById(req.params.id)
      .then(project => res.status(200).json({id:project._id, name:project.name, description:project.description,type:project.type,members:project.members}))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/project/:id').put((req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body, { upsert: true, new: true})
      .then(project => res.status(200).json({message:"Project successfully updated", id:project._id, name:project.name, description:project.description,type:project.type,members:project.members}))
      .catch(err => res.status(400).json('Error: ' + err));
  });


router.route('/project/:id').delete((req, res) => {
    Project.findByIdAndRemove(req.params.id, req.body)
      .then(project => res.status(200).json({message: "Project successfully deleted", id:project._id}))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;