(function(){
  function Room($firebaseArray){
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    //rooms.$add({id:1, name:"abc"});
    Room.all = rooms;
    
    return Room;
  }

  angular
    .module('coolMess')
    .factory('Room', ['$firebaseArray', Room]);
})();
