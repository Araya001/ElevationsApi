var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/elevation',function(req,res){
  res.sendFile(path.join(__dirname+'/backup.html'));
});

app.get('/connectfb.js',function(req,res){
  res.sendFile(path.join(__dirname+'/connectfb.js'));
});

app.get('/src/table2csv.js',function(req,res){
  res.sendFile(path.join(__dirname+'/src/table2csv.js'));
});

app.get('/10-1.png',function(req,res){
  res.sendFile(path.join(__dirname+'/10-1.png'));
});

app.listen(3000);

console.log("Running at Port 3000");