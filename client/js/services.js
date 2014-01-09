myApp.factory('itemService', ['$http', '$q', function($http, $q){

    return {
        apiPath : '/items/list',
        getAllItems : function() {
            var deferred = $q.defer()
            console.log('inside the service')

            $http.get(this.apiPath).success(function(data) {
                deferred.resolve(data)
            }).error(function() {
                deferred.reject('Error occurred while accessing...!')
            })

            return deferred.promise;

        }
    }
}])