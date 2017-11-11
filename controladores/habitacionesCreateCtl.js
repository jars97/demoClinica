/**
 * Created by joserodriguez on 18/02/17.
 */
angular
    .module('mainApp')
    .controller('habitacionesCreateCtl',habitacionesCreateCtl);

habitacionesCreateCtl.$inject = ['$scope','modeloHabitaciones','$routeParams','$location','$route','mensaje','modeloTiposHabitaciones'];

function habitacionesCreateCtl($scope,modeloHabitaciones,$routeParams,$location,$route,mensaje,modeloTiposHabitaciones) {



    //----- definiciones
    var vm = this;
    vm.create=create;
    vm.volver=volver;
    vm.load=load;

    //----------------------------------------

    //----- funciones

    function load(){
         modeloTiposHabitaciones.getAll()
            .then(function (res) {
                
                vm.tipos=res.data;
            });

    }

    function volver(){
        $location.path('/habitaciones-lista');
    };

    function create(){
        var data1=angular.toJson(vm.habitacion);
       console.log(data1);
        modeloHabitaciones.create(data1)
            .success(function (res, status, headers, config) {
                mensaje.dameVentana('sm',res.mensaje);
                $location.path('/habitaciones-lista');
            })
            .error(function (data, status, header, config) {
                mensaje.dameVentanaError('md',data.error);
            });
    };
};
