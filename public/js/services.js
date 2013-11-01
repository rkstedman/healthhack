'use strict'
angular.module('geKnowApp')
  .factory('Patient', ['$resource', function($resource) {
    return $resource('/patients/:id', { id: '@_id' });
  }])
  .service('PatientFactory', ['$filter', function($filter) {
    this.create = function(patient) {
      var birthdate = patient.profile.birthdate;
      
      patient.profile.__defineGetter__("birthdate", function() {
        return $filter('date')(birthdate, 'yyyy-MM-dd');
      });
      
      patient.profile.__defineSetter__("birthdate", function(val) {
        birthdate = val;
      });


      return patient;
    }
  }]);
