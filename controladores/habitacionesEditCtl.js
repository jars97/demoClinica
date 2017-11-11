angular
    .module('mainApp')
    .controller('habitacionesEditCtl',habitacionesEditCtl);

habitacionesEditCtl.$inject = ['$scope','modeloHabitaciones','$routeParams','$location','$route','mensaje','modeloTiposHabitaciones'];

function habitacionesEditCtl($scope,modeloHabitaciones,$routeParams,$location,$route,mensaje,modeloTiposHabitaciones) {



    //----- definiciones
    var vm = this;
    vm.load = load;
    vm.volver=volver;
    vm.update=update;
    //----------------------------------------

    //----- funciones

    function load() {
        modeloTiposHabitaciones.getAll()
            .then(function (res) {
                
                vm.tipos=res.data;
            });

        modeloHabitaciones.get($routeParams.id)
            .success(function (res, status, headers, config) {
                vm.habitacion = res;
            })
            .error(function (data, status, header, config) {
                mensaje.dameVentanaError('md', data.error);
            });
    };

    function volver(){
        $location.path('/habitaciones-lista');
    };

    function update(){
        var data1=angular.toJson(vm.habitacion);
        modeloHabitaciones.update($routeParams.id,data1)
            .success(function (res, status, headers, config) {
                mensaje.dameVentana('sm',res.mensaje);
                $location.path('/habitaciones-lista');

            })
            .error(function (data, status, header, config) {
                mensaje.dameVentanaError('md', data.error);

            });
    };
};
