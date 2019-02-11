const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required']
    }
});

// create model
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;