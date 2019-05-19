var db = require("../models");

exports.getTodos = function(req, res){
    // To do is the object that we have exported from the index.js file inside the models directory. It contains all the models exported from each model file.
   db.Todo.find()
   .then(function(todos){
       res.json(todos);
   })
   .catch(function(err){
       res.send(err);
   });
};

exports.createTodos = function(req, res){
   db.Todo.create(req.body)
   .then(function(newTodo){
       // Always send a response back to the user so they know their request has created the data. Always convert the object to json for the user.
       res.status(201).json(newTodo);
   })
   .catch(function(err){
       res.send(err);
   });
};

exports.showTodos = function(req, res){
   db.Todo.findById(req.params.todoId)
   .then(function(foundTodo){
       res.json(foundTodo);
   })
   .catch(function(err){
       res.send(err);
   });
};

exports.updateTodos = function(req, res){
    // Find an item by its ID (:todoID), then update it using (req.body) and send back the updated data to confirm database is updated.({new: true})
    db.Todo.findByIdAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(updatedTodo){
        res.json(updatedTodo);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.deleteTodos = function(req, res){
   db.Todo.remove({_id: req.params.todoId})
   .then(function(){
       res.json({message: "We deleted it!"});
   })
   .catch(function(err){
       res.send(err);
   });
};

module.exports = exports;