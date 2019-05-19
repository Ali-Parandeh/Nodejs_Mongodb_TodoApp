var express     = require("express"),
    app         = express(),
    todoRoutes  = require("./routes/todos"),
    bodyParser   = require("body-parser");

// Telling express to use bodyparser and parse the data into JSON object
app.use(bodyParser.json());
// Telling express to use body parser and encode extended urls.
app.use(bodyParser.urlencoded({extended: true}));
// Serve views directory which includes the html files
app.use(express.static(__dirname + "/views"));
// Serve "public" directory which includes the css files
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
   res.sendFile("index.html");
});

app.use("/api/todos", todoRoutes);

    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("App is running on " + process.env.PORT);
});

