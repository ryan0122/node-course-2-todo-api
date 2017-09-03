//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Automatically creates new database just by passing new name in
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
   return console.log('Unable to connect to MongoDb server');
  }

  //db.collection('Todos').insertOne({
  //  text: 'Something to do',
  //  completed: false
  //}, (err, res) => {
  //  if(err) {
  //    return console.log('Unable to insert Todo');
  //  }
  //  console.log(JSON.stringify(res.ops, undefined, 2 ))
  //});

  //db.collection('Users').insertOne({
  //  name: 'Ryan',
  //  age: 34,
  //  location: 'Denver'
  //}, (err, res) => {
  //  if(err) {
  //    return console.log('Unable to insert User');
  //  }
  //  console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2 ))
  //});

  console.log('Connected to MongoDb server');

  db.close();
});