// require express
var express = require("express");

// path module -- try to figure out where and why we use this
var path = require("path");

// create the express app
var app = express();

// // static content
app.use(express.static(path.join(__dirname, "/static")));
console.log("static path:", path.join(__dirname, "/static"));

// setting up our views folder for the ejs below
app.set('views', path.join(__dirname, '/views'));
console.log("views path", path.join(__dirname, '/views'));

// set up ejs as views engine
app.set('view engine', 'ejs');

//NOTE: index.html file in the static directory should render even 
// when your server does not explicitly handle the '/' route root route to render 
// the index.ejs view:

// app.get('/', function(req, res) {
//  res.render("index");
// })

app.get('/cars', function(req, res){
    res.render("cars");
})

app.get('/cars/new', function(req, res){
    res.render("form");
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});