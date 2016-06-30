const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/new', (req, res) => {
  res.render('users/new');
});

router.post('/create', (req, res) => {
  // create user here,
  // then redirect
  //console.log('body', req.body);
  return User.create(req.body).then(user => {
    //console.log(`User created: ${user._id}`);
    res.cookie('_id', user._id ,{ secure: false , httpOnly: true})
    res.redirect('show');
  });
});

router.get('/show', (req, res) => {
  //console.log(req.cookies)
  var id = req.cookies._id
  User.findById({_id: id}, function(err, user){
    res.render('users/show', {user: user} );
  })

});

router.get('/getlist',(req,res) => {
  console.log(req)
  var id = req.query._id
  User.findById({_id: id}, function(err, user){
    res.json(user);
  })

})

router.get('/edit', (req, res) => {
  res.render('users/edit');
});

router.patch('/update', (req, res) => {
  res.send('at user create');
});

router.delete('/destroy', (req, res) => {
  res.send('at user destroy');
});

module.exports = router;
