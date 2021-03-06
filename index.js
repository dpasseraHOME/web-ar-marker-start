var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

http.listen(process.env.PORT || 8080, function() {
	console.log('listening on *:8080');
});