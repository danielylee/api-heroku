const express = require('express');
const bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // Allows us to send parsed JSON to server

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {  // First error check for valid ID
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {  // Then check is todo object is present
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((err) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Starting on port ${port}$`);
});

module.exports = {app};
