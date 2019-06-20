var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var server = http.createServer(app);

//STATIC ASSETS
//looK in /public folder for static assets (HTML/CSS/JS) - Accepts http request on the server
app.use(express.static(__dirname + '/public'));


//DYNAMIC ROUTES
// LISTEN ON THIS ADDRESS FOR A POST REQUEST
	
app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); //for parsing application/x-www-form-urlencoded

						//enable post req on server -- #jQuery Post method()
app.post('/complete-test', postResults); //url, fnctuion
function postResults(req, res)  {  // 'req', res
		 // do stuff
console.log(req.body);
res.send("ok");
};

//ERROR HANDLING
//If nothing has been found yet, return a 404
		//any routes after this will be ignored

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


//end
server.listen('8080', '127.0.0.1');
console.log("Listening on http://127.0.0.1:8080");
