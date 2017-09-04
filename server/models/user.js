var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    required: true,
    trim: true,
    minlength: 1,
    type: 'string'
  }
});

module.exports = {
  User
};