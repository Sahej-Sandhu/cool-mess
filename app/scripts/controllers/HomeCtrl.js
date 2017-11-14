(function(){
  function HomeCtrl(Room, Message, $uibModal){

    this.rooms = Room.all;

    this.newRoom = function(){
      $uibModal.open({
        animation: true,
        templateUrl: '/templates/roomModal.html',
        controller: 'ModalCtrl as modal'
      });
    };

    this.showMessages = function(roomId){
      Message.setRoomId(roomId);
      
      $uibModal.open({
        animation: true,
        templateUrl: '/templates/messages.html',
        controller: 'MessageCtrl as messages'
      });
    };


  }

  angular
    .module('coolMess')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
