calendarApp.controller('SettingsController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
	$scope.api_token = $rootScope.api_token;
	$scope.cal_id = $rootScope.cal_id;
	$scope.start_day = $rootScope.start_day;
	$scope.lang = $rootScope.lang;
	$scope.day_length = $rootScope.day_length;
	$scope.cal_view = $rootScope.cal_view;

	$scope.save = function() {
		if($scope.api_token !== '' && $scope.api_token !== null){
			$rootScope.api_token = $scope.api_token;
		}
		if($scope.cal_id !== '' && $scope.cal_id !== null){
			$rootScope.cal_id = $scope.cal_id;
		}
		if($scope.start_day !== '' && $scope.start_day !== null){
			$rootScope.start_day = $scope.start_day;
		}
		if($scope.lang !== '' && $scope.lang !== null){
			$rootScope.lang = $scope.lang;
		}
		if($scope.day_length !== '' && $scope.day_length !== null){
			$rootScope.day_length = $scope.day_length;
		}
		if($scope.cal_view !== '' && $scope.cal_view !== null){
			$rootScope.cal_view = $scope.cal_view;
		}
		$location.path("/");
	}
}]);