

// creating models or schemas

// import lib
const { default: mongoose } = require('mongoose');


// creating the schema 
const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,

});

module.exports = mongoose.model('task',taskSchema);