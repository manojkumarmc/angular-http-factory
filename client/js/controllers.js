myApp.controller('MyCtrl', ['$scope','$http', 'itemService', 'empService', 'Restangular', function($scope, $http, itemService, empService, Restangular) {
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


    $scope.getEmp = function() {
        console.log('in emp method')
//        Restangular.one('employee', 123).get()
//            .then(function(emps) {
//                $scope.employees = emps
//            })

        empService.one('employee', 123).get()
            .then(function(emps) {
                $scope.employees = emps
            })


    }


}])