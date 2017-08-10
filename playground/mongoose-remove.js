const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Returns object
Todo.findByIdAndRemove('598c9cd18da1b94b556a800a').then((todo) => {
  console.log(todo);
});
