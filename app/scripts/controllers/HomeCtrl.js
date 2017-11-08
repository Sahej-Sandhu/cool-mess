(function(){
  function HomeCtrl(Room, $uibModal){

    this.rooms = Room.all;

    this.newRoom = function(){
      $uibModal.open({
        animation: true,
        templateUrl: '/templates/roomModal.html',
        controller: 'ModalCtrl as modal'
      });
    }


  }

  angular
    .module('coolMess')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
