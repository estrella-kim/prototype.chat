var express = require('express');
var router = express.Router();
var Chat = require('/prototype.chat/modules/Chat.js');

/* POST page. */
router.post('/enter', function(req, res, next) {
  var isSuccess = false,
      nickname = req.body.nickname;
    if(nickname && nickname.trim() !== '') {
        if(!Chat.hasUser(nickname)){
            Chat.addUsers(nickname);
            req.session.nickname = nickname;
            isSuccess = true;
        }
    }

    res.render('roomLists', {
        isSuccess : isSuccess,
        nickname : nickname
    })
});
router.post('/makeRoom', function(req, res){
    var isSuccess = false,
        roomName = req.body.roomname;

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