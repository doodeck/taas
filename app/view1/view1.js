'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$firebase',
	function($scope, $firebase) {
      var bindingTo = true;

      var ref = new Firebase(GlobalConfig.FirebaseRef).child("object");

      // create an AngularFire reference to the data
      var sync = $firebase(ref);

      if (!bindingTo) {
        // download the data into a local object
        $scope.data = sync.$asObject();//
      } else {
        //
        var syncObject = sync.$asObject(); // simple key/value data

        // synchronize the object with a three-way data binding
        // click on `index.html` above to see it used in the DOM!
        syncObject.$bindTo($scope, "data");
      }
}]);