var mongoose = require("mongoose");
// Monitoring DB
mongoose.set("debug", true);
// Connect to MongoDB and if db doesn't exist, create me one
mongoose.connect("mongodb://localhost/todo_api", { useNewUrlParser: true});
// Allow me to use mongoose promise library and promises .then() and .catch()
mongoose.Promise = Promise;

// export the model from the other file in to an object and attach it to module.exports to be used later.
// Practically we are exporting all of our modules one by one on an object on module.exports instead one by one
module.exports.Todo = require("./todo");

