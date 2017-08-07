// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('597a245cdbf1d91dc459e91f')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false // We don't want the console to return the original document
  }).then((res) => {
    console.log(res);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('597a25438df4ac1a18e51faa')
  }, {
    $set: {
      name: 'Jeff'
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

  // db.close();
});
