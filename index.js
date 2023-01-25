var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello guys!");
});

let port = 3100

app.listen(port,function(){
    console.log("Connected on port : "+port+"")
});