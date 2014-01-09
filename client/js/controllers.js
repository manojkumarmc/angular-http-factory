myApp.controller('MyCtrl', ['$scope','$http', 'itemService', function($scope, $http, itemService) {
    $scope.getIt = function() {
        $scope.items = itemService.getAllItems()
    }
}])