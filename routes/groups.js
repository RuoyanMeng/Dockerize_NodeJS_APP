const router = require('express').Router();
let User = require('../models/user.model');
let Group = require('../models/group.model');

router.route('/group').post((req, res) => {
    const name = req.body.name;
    const owner = req.body.owner;

    const newGroup = new Group({
        name,
        owner
    });
  
    newGroup.save()
      .then(group => res.status(201).json({message:'Group successfully created',id:group._id}))
      .catch(err => res.status(400).json('Error: ' + err));
//do i need update user info here???
  });

router.route('/group/:id').get((req, res) => {
    Group.findById(req.params.id)
      .then(group => res.status(200).json({id:group._id, name:group.name, owner:group.owner}))
      .catch(err => res.status(400).json('Error: ' + err));
  });


router.route('/group/:id').put((req, res) => {
    Group.findByIdAndUpdate(req.params.id, req.body, { upsert: true, new: true})
      .then(group => res.status(200).json({message:"Group successfully updated", id:group._id, name:group.name, owner:group.owner}))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/group/:id').delete((req, res) => {
    Group.findByIdAndRemove(req.params.id, req.body)
      .then(group => res.status(200).json({message: "Group successfully deleted", id:group._id}))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/group/:groupId/:userId').put((req, res) => {
    let groupId = req.params.groupId
    let userId = req.params.userId
    User.findByIdAndUpdate(userId, {$push:{groups:groupId}}, {new: true, upsert: true })
      .then(user => res.status(200).json({message:"User successfully added into a group", id:groupId}))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;