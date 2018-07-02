var express = require('express');
var router = express.Router();
var Chat = require('../modules/Chat');

router.get('/:id',function(req, res){
   var isSuccess = false,
       roomName = req.params.id;
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