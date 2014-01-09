myApp.controller('MyCtrl', ['$scope','$http', 'itemService', function($scope, $http, itemService) {
    $scope.getIt = function() {
        $scope.items = []

        itemService.getAllItems().then(function(data){
          $scope.items = data
          $scope.error = ""
        },
        function(errorMessage) {
            $scope.error = errorMessage
        })


    }
}])