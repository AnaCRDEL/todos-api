const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
},
    {timestamps: true}
);

const Todo = model('Todo', todoSchema);

module.exports = Todo;