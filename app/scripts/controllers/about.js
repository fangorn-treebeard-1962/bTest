'use strict';

/**
 * @ngdoc function
 * @name bTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bTestApp
 */
angular.module('bTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
