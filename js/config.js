mainApp.config(function($routeProvider,$httpProvider){


	$routeProvider

		.when('/',
			{
				templateUrl:'vistas/habitaciones-lista.html',
				controller:'habitacionesCtl',
				controllerAs :"vm"
			})
		.when('/habitaciones-lista',
			{
				controller:'habitacionesCtl as vm',
				templateUrl:'vistas/habitaciones-lista.html'

			})
		.when('/habitaciones-edit/:id',
			{
				controller:'habitacionesEditCtl',
				templateUrl:'vistas/habitaciones-edit.html',
				controllerAs :"vm"
			})
		.when('/habitaciones-create',
			{
				controller:'habitacionesCreateCtl',
				templateUrl:'vistas/habitaciones-create.html',
				controllerAs :"vm"

			})
		.otherwise({ redirectTo:'/'});

$httpProvider.interceptors.push('sessionInjector');


});