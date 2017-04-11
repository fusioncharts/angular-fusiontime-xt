(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = function (root, angular) {
      if (angular === undefined) {
        if (typeof window !== 'undefined') {
          angular = require('angular');
        } else {
          angular = require('angular')(root);
        }
      }
      factory(angular);
      return angular;
    };
  } else {
    factory(angular);
  }
}((angular) => {
  let chart;
  const fc = angular.module('ng-fusiontime', []);
  fc.directive('fusiontime', () => ({
    scope: {
      width: '@',
      height: '@',
      datasource: '@',
    },
    link(scope, element, attrs) {
      const chartConfig = {
        type: 'timeseries',
        width: attrs.width,
        height: attrs.height,
        renderAt: element[0],
        dataFormat: 'json',
        dataSource: scope.$parent.fcDataSource,
      };

      let setDataTimer;
      const setChartData = function (dataSource) {
          chartConfig.dataSource = dataSource;
          // clear previous dataUpdate timer
          if (setDataTimer) {
            clearTimeout(setDataTimer);
          }

          setDataTimer = setTimeout(() => {
            if (chart && chart.rerender) {
								// TODO: rerender the chart with new Data
            }
          }, 100);
        },

        drawChart = function (dataSource) {
          chartConfig.dataSource = dataSource;
          chart = new FusionCharts(chartConfig);
          chart.render();
        };

				// attach a ovserver on dataSource
				// TODO: call rerender()
      scope.$watch('datasource', (newVal, oldVal) => {
        if (scope.$parent.fcDataSource) {
          drawChart(scope.$parent.fcDataSource);
        }
      });

      scope.$watch('width', (newVal, oldVal) => {
        if (newVal !== oldVal) {
						// TODO: resize width => chart.resizeTo

        }
      });

      scope.$watch('height', (newVal, oldVal) => {
        if (newVal !== oldVal) {
						// TODO: resize height => chart.resizeTo

        }
      });

				// For the initial load
      angular.element(document).ready(() => {
        if (scope.$parent.fcDataSource) {
          drawChart(scope.$parent.fcDataSource);
        }
      });
    },
  }));
}));
