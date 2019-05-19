/* global $*/
// As soon as DOM is fiished loading, pull data from database and append them to the page
$("document").ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos);
    
    $("#todoInput").keypress(function(event){
        if(event.which == 13 && $("#todoInput").val()!== "" )
        {
            createTodo();
        }
    });
    
    $(".list").on("click", "li", function() {
        updateTodo($(this));
    });
    
    $(".list").on("click", "span", function(event){
        event.stopPropagation();
        deleteTodo($(this).parent());
    });
    
});

// Loop through data from the database 
function addTodos(data){
    // Append todos to the page
    data.forEach(function(item){
        addTodo(item);
    });
}


// Append todos to the page
function addTodo(item){
    $("#todoInput").val("");
    var newTodo = $("<li class='task'>" + item.name + "<span id='" + item._id + "'>x</span></li>");
    newTodo.data("id", item._id);
    newTodo.data("completed", item.completed);
    if(item.completed){
        newTodo.addClass("done");
    }
    $(".list").append(newTodo);
}

// Post new todos to the database from the form
function createTodo(){
    // Send request to createNewTodo
    var data = $("#todoInput").val();
    $.post("/api/todos", {name: data})
    .then(function(newTodo){
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    });
}

function deleteTodo(todo){
    var clickedId = todo.data("id");
    var deleteUrl = "/api/todos/" + clickedId;
    $.ajax({
    url: deleteUrl,
    method: "DELETE"
    })
    .then(function(data){
        todo.remove();
    })
    .catch(function(err){
        console.log(err);
    });
}

function updateTodo(todo){
    var updateUrl = "/api/todos/" + todo.data("id");
    var isDone = !todo.data("completed");
    var updateData = {completed: isDone};
    $.ajax({
    method: "PUT",
    url: updateUrl,
    data: updateData
    })
    .then(function(newTodo){
        todo.toggleClass("done");
        todo.data("completed", isDone);
    })
    .catch(function(err){
        console.log(err);
    });    
}