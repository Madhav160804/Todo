const mongoose = require("mongoose");

// mongodb+srv://madhavdhingra11:MgiLDuXzI9tmguJa@cluster0.8snn9ew.mongodb.net/
const connectionString = "mongodb+srv://madhavdhingra11:MgiLDuXzI9tmguJa@cluster0.8snn9ew.mongodb.net/";
mongoose.connect(connectionString);
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}