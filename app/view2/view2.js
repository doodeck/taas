'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$firebase',
	function($scope, $firebase) {
      var ref = new Firebase(GlobalConfig.FirebaseRef).child("array");
      var sync = $firebase(ref);

      // create a synchronized array for use in our HTML code
      $scope.messages = sync.$asArray();

      $scope.addMessage = function(text) {
        $scope.messages.$add({text: text});
      }
}]);