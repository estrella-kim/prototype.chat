var express = require('express');
var router = express.Router();
var http = require('http').Server(express());
var io  = require('socket.io')(http);

/* GET home page. */
router.post('/', function(req, res, next) {
    var roomName = req.body.roomname;
    var isSuccess = true;
  //res.render('index', { title: 'Express' });
    res.render('chat', {
        roomName: roomName,
        isSuccess : isSuccess
    });
});


io.set('resource', '/socket.io');

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
        console.log('message:' + msg);
        io.emit('chat message', msg);
    })
    /* socket.on('disconnect', function(){
         console.log('a user disconnected');
     })*/
});


module.exports = router;