(function() {

	var clone = function(obj) {
		if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
			return obj;
		var temp = obj.constructor();
		for (var key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				obj['isActiveClone'] = null;
				temp[key] = clone(obj[key]);
				delete obj['isActiveClone'];
			}
		}
		return temp;
	};

	var chart = null;

	var fc = angular.module('ng-fusiontime', []);

	fc.directive('fusiontime', function() {
		return {
			scope: {
				width: '@',
				height: '@',
				datasource: '@'
			},

			link: function(scope, element, attrs) {
				var chartConfig = {
					type: "timeseries",
					width: attrs.width,
					height: attrs.height,
					renderAt: element[0],
					dataFormat: 'json',
					dataSource: clone(scope.$parent.fcDataSource)
				};

				var setDataTimer,
					setChartData = function(dataSource) {
						chartConfig.dataSource = dataSource;
						// clear previous dataUpdate timer
						if (setDataTimer) {
							clearTimeout(setDataTimer);
						}

						setDataTimer = setTimeout(function() {
							if (chart && chart.setJSONData) {
								//  TODO: rerender the chart with new Data
							}
						}, 100);
					},

					drawChart = function(dataSource) {

						chartConfig.dataSource = clone(dataSource);
						chart = new FusionCharts(chartConfig);
						chart.render();

					};

				// attach a ovserver on dataSource
				// $observe is used for only interpolation like ==> {{ exp }}
				scope.$watch('datasource', function(newVal, oldVal) {
					if (scope.$parent.fcDataSource) {
						drawChart(scope.$parent.fcDataSource);
					}
				});

				scope.$watch('width', function(newVal, oldVal) {
					if (newVal !== oldVal) {
						// TODO: resize width

					}
				});

				scope.$watch('height', function(newVal, oldVal) {
					if (newVal !== oldVal) {
						// TODO: resize height

					}
				});

				angular.element(document).ready(function() {
					if (scope.$parent.fcDataSource) {
						drawChart(scope.$parent.fcDataSource);
					}
				});
			}
		}
	});
})();
