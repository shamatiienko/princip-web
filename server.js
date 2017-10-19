// // import the http module
// var http = require('http');

// // handle sending requstes and returning responses
// function handleRequests(req, res) {
//     res.end('hello');
// }

// // create the server
// var server = http.createServer(handleRequests);

// // start server and listen on port x
// server.listen(8080, function () {
//     console.log('Listening on port 8080');
// });


//////////EXPRESS//////////

// require our dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

// route our app
var router = require('./app/routes');
app.use('/', router);

// set static files ( css, images, javascripts)
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function () {
    // console.log('log started');
});
