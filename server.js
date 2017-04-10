// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});
//IMPORTANT:  the code below "routes" the request to a different page file
app.get("/products.html", function (request, response) {
  response.sendFile(__dirname + '/public/products.html');
});
//IMPORTANT:  the code below "routes" the request to a different page file
app.get("/about.html", function (request, response) {
  response.sendFile(__dirname + '/public/about.html');
});
//IMPORTANT:  the code below "routes" the request to a different page file
app.get("/order.html", function (request, response) {
  response.sendFile(__dirname + '/public/order.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
