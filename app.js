var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/view",function(req,res){
    res.sendFile(path.join(__dirname,"view.html"));
})

var reserve = [];
  // Create New reservations - takes in JSON input
  app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReserve = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReserve.routeName = newReserve.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReserve);
  
    reserve.push(newReserve);
  
    res.json(newReserve);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});