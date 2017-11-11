/**
 * Created by joserodriguez on 26/06/16.
 */
angular
    .module('mainApp')
    .controller('mensajeCtl',mensajeCtl);
mensajeCtl.$inject = ['$scope','$routeParams','$location','$route','$modalInstance','mensaje'];

function mensajeCtl($scope,$routeParams,$location,$route,$modalInstance,mensaje){
    $scope.mensaje = mensaje;

    $scope.cancel = function ()
    {
        $modalInstance.dismiss('cancel');
    };
}