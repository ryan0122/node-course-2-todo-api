//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Automatically creates new database just by passing new name in
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
   return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to MongoDb server');

  //db.collection('Todos').find({
  //  _id: new ObjectID("59ac701ecfc4bc1be38d5fb2")
  //}).toArray()
  //.then((docs) => {
  //  console.log('Todos:');
  //  console.log(JSON.stringify(docs, undefined, 2));
  //}, (err) => {
  //  console.log('unable to fetch todos')
  //});

  db.collection('Users').find({
    name: 'Ryan'
  }).toArray()
  .then((docs) => {
    console.log('Todos:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch todos')
  });

  db.collection('Todos').count()
    .then((count) => {
      console.log(`Todos: ${count}`);

    }, (err) => {
      console.log('unable to fetch todos')
    });

});