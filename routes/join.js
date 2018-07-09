var express = require('express');
var router = express.Router();
var http = require('http').Server(express());
var io  = require('socket.io')(http);
var Chat = require('../modules/Chat');
require('../modules/Room')(http);

router.get('/:id',function(req, res){
   var isSuccess = false,
       roomName = req.params.id;
   console.log(roomName);
   if(Chat.hasRoom(roomName)) {
       isSuccess = true;
   }
   res.render('room', {
       isSuccess : isSuccess,
       roomName : roomName,
       nickname : req.session.nickname
   })
});

module.exports = router;

