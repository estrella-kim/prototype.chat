var express = require('express');
var router = express.Router();
var Chat = require('../modules/Chat');


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

    res.render('roomLists', {
        isSuccess : isSuccess,
        nickname : nickname
    })
});



module.exports = router;