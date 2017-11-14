(function(){
  function MessageCtrl(Message, $uibModalInstance){
    this.coolMessages = Message.getByRoomId(-1);

    this.send = function(){
      Message.add({
        content: this.coolMessage,
        roomId: Message.getRoomId(),
        sentAt: new Date(),
      });

      this.coolMessage = "";
    };
  }

  angular
    .module('coolMess')
    .controller('MessageCtrl', ['Message', '$uibModalInstance', MessageCtrl]);
})();
