mainApp.factory('modeloHabitaciones', ['$http','API',function($http,API){
    var url=API.dameContexto()+'/habitaciones';
    var modelo = {};
    var config = {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    }
    modelo.getAll = function () {
        return $http.get(url);
    };

    modelo.get = function (id) {
        return $http.get(url+'/'+id);
    };

    modelo.delete = function (id) {
        return $http.delete(url+'/'+id);
    };

    modelo.update = function (id,data) {
        return $http.put(url+'/'+id,data, config);
    };

    modelo.create = function (data) {
        return $http.post(url,data, config);
    };


    return modelo;
}]);
