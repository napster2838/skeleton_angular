'use strict';

angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'])
  .config(function ($routeProvider) {

    $routeProvider.when("/dashboard", {templateUrl: "partials/home"})
      .otherwise({
        redirectTo: 'dashboard'
      });
  });
