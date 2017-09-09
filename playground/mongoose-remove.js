const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove

//Todo.remove({}).then((result) => {
//  console.log(result);
//});

//Todo.findOneAndRemove();

Todo.findByIdAndRemove('59b33e1a761daabf4482d634').then((todo) => {
  console.log(todo);
});