/**
 * Created by joserodriguez on 07/05/16.
 */
//------------------------------------------------------------------------------------------------------
angular
    .module('mainApp')
    .controller('habitacionesCtl',habitacionesCtl);

habitacionesCtl.$inject = ['$scope','modeloHabitaciones','$routeParams','$location','$route','mensaje'];

function habitacionesCtl($scope,modeloHabitaciones,$routeParams,$location,$route,mensaje) {

    $scope.formData = {};

    //----- definiciones
    var vm = this;
    vm.load = load;
    vm.editar = editar;
    vm.create = create;
    vm.eliminar = eliminar;
    vm.shouldBeDisabled = shouldBeDisabled;
    //----------------------------------------

    //----- funciones

    function load() {
        modeloHabitaciones.getAll()
            .success(function (res, status, headers, config) {
               // console.log(res);
                vm.todos = res;
            })
            .error(function (data, status, header, config) {
                mensaje.dameVentanaError('md', data.error);
            });
    };


    function eliminar(id) {
        /*if (confirm("Estas seguro de realizar esta operacion?")) {
            modeloHabitaciones.delete(id)
                .success(function (data, status, headers, config) {
                    mensaje.dameVentana('sm', data.mensaje);
                    $route.reload();
                })
                .error(function (data, status, header, config) {
                    mensaje.dameVentanaError('md', data.error);

                });
        }*/
        mensaje.dameVentanaError('md', 'NO se permiten borrar las habitaciones');

    }

    function editar(id) {
        $location.path('/habitaciones-edit/' + id);
    }

    function create() {
        $location.path('/habitaciones-create');
    }

    function shouldBeDisabled(item) {
        if (item.esPos) {
            return true;
        } else {
            return false;
        }
    };
};
