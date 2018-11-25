var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var comment = new mongoose.Schema({
  content: String,
  date: {
    type : Date,
    default : Date.now()
  },
  author: {
    type : Schema.Types.ObjectId,
    ref : 'author',
    required : true
}
})


module.exports = comment;
