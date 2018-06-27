var Chat = module.exports = {
    users : [],
    rooms : [],
    hasUser : function(nickname){
        var users = this.users.filter(function(element){
            return (element === nickname);
        })

        if(users.length > 0 ) {
            return true;
        }else{
            return false;
        }
    },
    addUsers : function(nickname) {
        this.users.push(nickname);
    },
    hasRoom : function(roomName) {
        var rooms = this.rooms.filter(function(element){
            return (element === roomName);
        })
        if(rooms.length > 0) {
            return true;
        }else {
            return false;
        }
    },
    addRoom : function(roomName) {
        this.rooms.push({name : roomName, attendants : []})
    }
}