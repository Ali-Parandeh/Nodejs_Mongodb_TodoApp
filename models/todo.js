var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "Name cannot be blank!"
    },
    // Set default value to false
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

// compile the schema into a model.
var Todo = mongoose.model("Todo", todoSchema);
// export the model out and send it to another file I require this model from
module.exports = Todo;