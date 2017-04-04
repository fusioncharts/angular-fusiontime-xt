import angular from 'angular';
import "../src/angular.fusiontime";
import tsData from "./data/datarepo";

const app = angular.module("myApp", ["ng-fusiontime"]);

app.controller("myCtrl", ["$scope", function ($scope) {
  $scope.tsData = tsData;
  $scope.charts = Object.keys(tsData);
  // Init
  $scope.fcDataSource = $scope.tsData[$scope.charts[0]].data;

  $scope.onLinkClick = function (item) {
    $scope.fcDataSource = $scope.tsData[item].data;
  }

}]);
