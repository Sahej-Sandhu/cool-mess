(function(){
  function MessageCtrl(Message, $uibModalInstance, $cookies, $rootScope){
    this.coolMessages = Message.getByRoomId(-1);
    // var currentUser = $cookies.get('coolMessCurrentUser');

    this.send = function(){
      Message.add({
        content: this.coolMessage,
        roomId: Message.getRoomId(),
        sentAt: new Date(),
        userName: $rootScope.CurrentUser
      });

      this.coolMessage = "";
    };

    this.closeRoom = function(room){
      $uibModalInstance.close(room);
    };
  }

  angular
    .module('coolMess')
    .controller('MessageCtrl', ['Message', '$uibModalInstance', '$cookies', '$rootScope', MessageCtrl]);
})();
