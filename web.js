var express = require('express');
var fs = require('fs');

var resp = fs.readFileSync('index.html', function(err ,data){
	if(err) throw err;
	console.log(data);
    })

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(resp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});