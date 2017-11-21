(function(){
  function HomeCtrl(Room, Message, $cookies, $scope, $uibModal){

    this.rooms = Room.all;
    this.currentUser = $cookies.get('coolMessCurrentUser');
    $scope.currentUser = this.currentUser;

    this.isLoggedIn = function(){
      if(!this.currentUser || this.currentUser === ''){
        return false;
      }
      return true;
    };

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

    this.changeUsers = function(){
      var modal = $uibModal.open({
        animation: true,
        templateUrl: '/templates/login.html',
        controller: 'ModalCtrl as modal'
      });
      modal.result.then(function(){
        this.currentUser = $cookies.get('coolMessCurrentUser');
        $scope.currentUser = this.currentUser;
      });
    };

  }

  angular
    .module('coolMess')
    .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$scope', '$uibModal', HomeCtrl]);
})();
