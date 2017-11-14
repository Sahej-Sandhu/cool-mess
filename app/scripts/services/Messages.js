(function(){
  function Message($firebaseArray){
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    var currentRoomId = null;

    Message.getByRoomId = function(roomId){
      return $firebaseArray(ref.orderByChild('roomId').equalTo(currentRoomId));
    };

    Message.setRoomId = function(roomId){
      currentRoomId = roomId;
    };

    Message.getRoomId = function(){
      return currentRoomId;
    };

    Message.add = function(msg){
      messages.$add(msg);
    };


    return Message;
  }

  angular
    .module('coolMess')
    .factory('Message', ['$firebaseArray', Message]);
})();
