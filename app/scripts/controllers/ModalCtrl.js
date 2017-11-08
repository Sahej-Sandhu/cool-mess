(function(){
  function ModalCtrl(Room, $uibModalInstance){
    this.addNewRoom = function(){
      Room.add(this.newRoom);
      $uibModalInstance.close(this.addNewRoom);
    };

    this.cancelNewRoom = function(){
      $uibModalInstance.dismiss();
    }

  }

  angular
    .module('coolMess')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
