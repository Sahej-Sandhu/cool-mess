(function(){
  function CoolMessCookies($cookies, $uibModal, $rootScope){
    $cookies.put('coolMessCurrentUser', "");
    $rootScope.CurrentUser = $cookies.get('coolMessCurrentUser');

    // if(!$rootScope.CurrentUser || $rootScope.CurrentUser === ''){
    //
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
