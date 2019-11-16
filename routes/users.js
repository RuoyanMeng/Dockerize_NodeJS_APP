const router = require('express').Router();
let User = require('../models/user.model');
let Group = require('../models/group.model');

router.route('/user').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const groups = req.body.group

    const newUser = new User({
        name,
        email,
        address,
        phoneNumber,
        groups
    });
  
    newUser.save()
      .then(user => res.status(201).json({message:'User successfully created',id:user._id}))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/user/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(user => res.status(200).json({id:user._id,name:user.name,email:user.email}))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/users').get((req, res) => {
    User.find({},{_id:1})
      .then(user=> {
        let ids = [];
        let i = 0;
        console.log(user)
        for (item of user){
          ids[i]={id:item._id}
          i=i+1;
          console.log(item)
        }
      
        return res.status(200).json(ids)
      })
      // .then(users => res.status(200).json(users)) 
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/user/:id').put((req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { upsert: true, new: true})
      .then(user => res.status(200).json({message:"User successfully updated", id:user._id,name:user.name,email:user.email}))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/user/:id').delete((req, res) => {
    User.findByIdAndRemove(req.params.id, req.body)
      .then(user => res.status(200).json({message: "User successfully deleted", id:user._id}))
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;
