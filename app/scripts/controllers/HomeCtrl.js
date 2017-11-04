(function(){
  function HomeCtrl(Room){

    this.rooms = Room.all;


  }

  angular
    .module('coolMess')
    .controller('HomeCtrl', ["Room", HomeCtrl]);
})();
