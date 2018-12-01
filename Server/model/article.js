var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var article = new mongoose.Schema({
  title: String,
  content: String,
  date: {
    type : Date,
    default : Date.now()
  },
  author : {
    type : Schema.Types.ObjectId,
    ref : 'users',
    required : true
  },
comments:[{
  type : Schema.Types.ObjectId,
  ref : 'commentuser'
}]
})
module.exports = article;



