(function(){
  function ModalCtrl(Room, $uibModalInstance, $rootScope, $cookies){
    this.addNewRoom = function(){
      Room.add(this.newRoom);
      $uibModalInstance.close(this.addNewRoom);
    };

    this.cancelNewRoom = function(){
      $uibModalInstance.dismiss();
    };

    this.setUserName = function(){
      if(!this.username){
        return;
      }
        $cookies.put('coolMessCurrentUser', this.username); 
        $uibModalInstance.close();

    };

  }

  angular
    .module('coolMess')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', '$rootScope', '$cookies', ModalCtrl]);
})();
