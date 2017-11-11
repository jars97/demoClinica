/**
 * Created by joserodriguez on 07/05/16.
 */
var mainApp = angular.module('mainApp', ['ngRoute','ui.bootstrap','ngTouch','ngResource','ngAnimate']);

mainApp.service('API', function() {
    this.dameContexto = function(){
        return "http://jarsdevelopment.ddns.net/api.clinica/v1"

    }
});

mainApp.factory('sessionInjector', function() {
    var sessionInjector = {
        request: function(config) {
            config.headers['X-USER']=sessionStorage.user;
            config.headers['X-TOKEN'] = sessionStorage.token;
            //config.headers['X-DB'] = sessionStorage.db;
            config.headers['X-DB'] = 'profits';
            return config;
        }
    };
    return sessionInjector;
});

mainApp.service('mensaje', function($modal) {
    this.dameVentana = function(size,mensaje){
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'mensajes/mensaje.html',
            controller: 'mensajeCtl',
            size: size,
            resolve: {
                mensaje: function () {
                    return mensaje;
                }
            }
        });
    }
    this.dameVentanaError = function(size,mensaje){
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'mensajes/mensaje-error.html',
            controller: 'mensajeCtl',
            size: size,
            resolve: {
                mensaje: function () {
                    return mensaje;
                }
            }
        });
    }

});









