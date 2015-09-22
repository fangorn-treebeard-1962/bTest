'use strict';

/**
 * @ngdoc function
 * @name bTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bTestApp
 */
angular.module('bTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
