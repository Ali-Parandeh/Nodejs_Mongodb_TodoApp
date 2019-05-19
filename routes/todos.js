var express = require("express");
// Enables you to modularise and group your routes into chunks.
var router = express.Router();
// Require the to dos model. "../" means go back up one level in the directory tree. 
// When requiring only a directory, express will grab index.js from that directory by default.
// var db = require("../models");
var helpers = require("../helpers/todos");

// This won't conflict with the "/" route inside index.js.
// router.get("/", helpers.getTodos);
// CREATE ROUTE
// router.post("/", helpers.createTodos);
// Chaining the above
router.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodos);

// SHOW ROUTE
// router.get("/:todoId", helpers.showTodos);
// UPDATE ROUTE
// router.put("/:todoId", helpers.updateTodos);
// DELETE ROUTE
// router.delete("/:todoId", helpers.deleteTodos);

// Chaining the above
router.route("/:todoId")
    .get(helpers.showTodos)
    .put(helpers.updateTodos)
    .delete(helpers.deleteTodos);

//export the to do routes
module.exports = router;