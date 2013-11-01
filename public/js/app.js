'use strict'

angular.module('geKnowApp', ['ngRoute', 'ngResource'])
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/views/patients/patientList', 
      controller: 'PatientListCtrl'
    })
    .when('/about', {
      templateUrl: '/views/about' 
    })
    .when('/patientView', {
      templateUrl: '/views/patients/patientView',
      controller: 'PatientViewCtrl'
    })
    .when('/patientPrintView', {
      templateUrl: '/views/patients/patientPrintView',
      controller: 'PatientViewCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
