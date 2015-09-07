var myModule = angular.module("FinalApp", ['ui.router']);

myModule.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider.state('HomeState', {
        url: "/",
        templateUrl: 'pages/home.html',
        controller: 'HomeCtrl'
    });

    $stateProvider.state('ResultadoState', {
        url: "/Resultado",
        templateUrl: 'pages/resultado.html',
        controller: 'ResultadoCtrl'
    });

    $urlRouterProvider.otherwise("/");
});
