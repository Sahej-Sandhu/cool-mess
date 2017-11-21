(function(){
  function CoolMessCookies($cookies, $uibModal){
    $cookies.put('coolMessCurrentUser', "");
    var currentUser = $cookies.get('coolMessCurrentUser');

    // if(!currentUser || currentUser === ''){
    //   $uibModal.open({
    //     animation: true,
    //     templateUrl: '/templates/login.html',
    //     controller: 'ModalCtrl as modal',
    //   });
    // }
  }

  angular
    .module('coolMess')
    .run(['$cookies', '$uibModal', '$rootScope', CoolMessCookies]);
})();
