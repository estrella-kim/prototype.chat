var express = require('express');
var router = express.Router();
var Chat = require('../modules/Chat');

router.post('/', function(req, res){
    var isSuccess = false,
        roomName = req.body.roomName;

    if(roomName && roomName.trim() !== '') {
        if(!Chat.hasRoom(roomName)){
            Chat.addRoom(roomName);
            isSuccess = true;
        }
    }
    res.render('makeRoom',{
        isSuccess : isSuccess,
        roomName : roomName
    })
})



module.exports = router;