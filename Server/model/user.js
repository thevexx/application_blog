var mongoose = require('mongoose');
var User = new mongoose.Schema({
    name: String,
    lastname: String,
    email: {
      type:  String,
      unique: true,
      required: true,
    },
    password: String,
    role: {
      type: String,
      default: 'user',
      enum:['user', 'admin']
    }
  });
  mongoose.model('User', User);
  module.exports = User;
