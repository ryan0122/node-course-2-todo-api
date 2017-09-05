const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '59ae1398ba29bc2d198941f8asdfasf';
//
//if(!ObjectID.isValid(id)){
//  console.log('ID not valid');
//};

//Todo.find({
//  _id: id
//}).then((todos) => {
//  console.log('Todos', todos);
//});
//
//Todo.findOne({
//  _id: id
//}).then((todo) => {
//  console.log('Todo', todo);
//});
//
//Todo.findById(id).then((todo) => {
//  if(!todo) {
//    return console.log('Id not found');
//  }
//  console.log('Todo By Id', todo);
//}).catch((e) => {
//  console.log(e);
//});

//Query users collection

var userId = '59ac982c1cbf211ee20da9e6';

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', user);
}).catch((e) => {
  console.log(e);
});
