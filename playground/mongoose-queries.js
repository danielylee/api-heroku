const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5980fbee650bae2d3cda8718';

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});
