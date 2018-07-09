var Chat = require('./Chat');

module.exports = function(app) {
    var io = require('socket.io').listen(app);

    var Room = io
        .of('/room')
        .on('connection', function(socket){
            var joinedRoom = null;
            socket.on('join', function(data) {
                if(Chat.hasRoom(data.roomName)){
                    joinedRoom = data.roomName;
                    socket.emit('joined', {
                        isSuccess: true,
                        nickName: data.nickName
                    })
                    socket.broadcast.to(joinedRoom).emit('joined', {
                        isSuccess: true,
                        nickName: data.nickName
                    })
                } else{
                    socket.emit('joined', {
                        isSuccess : false
                    })
                }
            })
        })
}