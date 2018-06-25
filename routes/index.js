var express = require('express');
var router = express.Router();
var http = require('http').Server(express());
var io  = require('socket.io')(http);

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    res.render('index', { title: 'Express' });
});



io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
        console.log('message:' + msg);
        io.emit('chat message', msg);
    })
    /* socket.on('disconnect', function(){
         console.log('a user disconnected');
     })*/
})


module.exports = router;