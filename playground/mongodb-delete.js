//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Automatically creates new database just by passing new name in
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to MongoDb server');

  //deleteMany
  //db.collection('Todos').deleteMany({text: 'Eat Lunch'})
  //.then((result) => {
  //  console.log(result);
  //});


  //deleteOne
  //db.collection('Todos').deleteOne({text: 'Eat lunch'})
  //  .then((result) => {
  //    console.log(result);
  //  });

  //findOneAndDelete
  //db.collection('Todos').findOneAndDelete({completed: false})
  //.then((result) => {
  //  console.log(result);
  //});

  db.collection('Users').findOneAndDelete({_id: new ObjectID("59ac721a24344d1bf1a06567")})
  .then((result) => {
    console.log(result);
  });

  db.collection('Users').deleteMany({name: 'Ryan'})
  .then((result) => {
    console.log(result);
  });

  //db.close();

});