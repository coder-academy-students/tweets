const router = require('express').Router();
const User = require('../models/user')

const newCtrl = (req, res) => {
  res.send('at new tweet ctrl');
};

const createCtrl = (req, res) => {
  res.send('at create tweet ctrl');
};

const showCtrl = (req, res) => {
  res.send('at show tweet ctrl');
};

const destroyCtrl = (req, res) => {
  res.send('at destroy tweet ctrl');
};

router.get('/new', newCtrl);
router.post('/create', createCtrl);
router.get('/show', showCtrl);
router.delete('/destroy', destroyCtrl);

router.post('/tweet', function(req,res){
  var id = req.body._id

  console.log("see me run, run run run " + id + ' ' + req.body.tweet)

  User.findById({_id: id}, function(err, user){
    user.tweets.push(req.body.tweet)
    user.save().then(function(){
      res.status(200).end()
    })
  })

});

module.exports = router;
