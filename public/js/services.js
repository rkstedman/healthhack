'use strict'
angular.module('geKnowApp')
  .factory('Patient', ['$resource', function($resource) {
    return $resource('/patients/:id', { id: '@_id' });
  }]);
