
var express = require('express')
var bodyParser = require('body-parser')
var websocket = require('./websockets')
var app = express()
app.use(bodyParser.json())

app.get('/' ,function( req ,res ){
    res.sendfile('app.html')
} )
app.post('/saveval' , function(req , res){
    var data = {val : req.body.val ,
                i: req.body.i,
                j : req.body.j};
    websocket.broadcast('new_val' ,  data)
console.log('hahaha' + data.val + data.i + data.j);
})

var server = app.listen(process.env.PORT || 8080 , function(){
    console.log("Listening on 8080")
})
require('./websockets').connect(server)