const mongoose = require('../lib/db');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  createdAt: Date,
  updateAt: Date,
  tweets: [{
    text: String, isLiked: {type: Boolean, default: false}
  }]
});

userSchema.methods.addTweet = function(text) {
  this.tweets.push({text: text});
  return this.save();
}

userSchema.methods.listTweets = function() {
  this.tweets.forEach(tweet => {
    console.log('\n');
    console.log(`${this.username} has tweeted: ${tweet.text}`);
    console.log('\n');
  });
  return this.tweets
  // show me all the tweets all pretty like
}
userSchema.methods.findTweets = function(searchString) {
  // [match1, match2] or []
  return this.tweets.filter(tweet => {
    return tweet.text.indexOf(searchString) >= 0 ? true : false;
   });
}

// userSchema.methods.addFriend = function(?????) {
//   make me some friends
//   remember i might need some schema changes!
//   you dont win friends with salad
// }

userSchema.methods.listFriends = function() {
  // Show me all the friends I have
}

const User = mongoose.model('User', userSchema);

module.exports = User;
