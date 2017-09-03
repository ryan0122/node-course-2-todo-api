//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Automatically creates new database just by passing new name in
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to MongoDb server');

  //db.collection('Todos').findOneAndUpdate({
  //    _id: new ObjectID("59ac85501ba1342c8c293ff6")
  //  }, {
  //  $set: {
  //    completed: true
  //  }
  //}, {
  //  returnOriginal: false
  //})
  //.then((res) => {
  //  console.log(res);
  //});

  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("59ac7102aeb2881be7a13af2")
    }, {
      $set: {name: "Ryan"},
      $inc: {age: 1}
    }, {
      returnOriginal: false
    })
    .then((res) => {
      console.log(res);
    });


  //db.close();

});