var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port);
console.log('Magic happens on port ' + port);
