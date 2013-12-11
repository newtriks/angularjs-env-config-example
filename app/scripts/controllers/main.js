'use strict';

angular.module('controllers.main', [])
  .controller('MainCtrl', ['$scope', 'configuration',
    function ($scope, configuration) {
      console.log(configuration);
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        configuration.foo
      ];
    }
  ]);
