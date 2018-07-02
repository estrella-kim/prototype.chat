var express = require('express');
var router = express.Router();
var Chat = require('../modules/Chat');

/* GET page. */
router.get('/', function(req, res, next) {
    if(req.session.nickname) {
        res.render('enter', {
            isSuccess : true,
            nickname : req.session.nickname,
            roomList : Chat.getRoomList()
        })
    }  else {
        res.render('enter', {
            isSuccess : false,
            nickname : ''
        })
    }
})

/* POST page. */
router.post('/', function(req, res, next) {
  var isSuccess = false,
      nickname = req.body.nickname;

    if(nickname && nickname.trim() !== '') {
        if(!Chat.hasUser(nickname)){
            Chat.addUsers(nickname);
            req.session.nickname = nickname;
            isSuccess = true;
        }
    }

    res.render('enter', {
        isSuccess : isSuccess,
        nickname : nickname,
        roomList : Chat.getRoomList()
    })
});



module.exports = router;