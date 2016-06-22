var calendarApp = angular.module('calendarApp', ['ngRoute', 'ui.calendar']);

calendarApp.config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'views/calendar.html',
			controller  : 'CalendarController'
		})

		.when('/calendar', {
			templateUrl : 'views/calendar.html',
			controller  : 'CalendarController'
		})

		.when('/settings', {
			templateUrl : 'views/settings.html',
			controller  : 'SettingsController'
		})
		
		.otherwise({
			redirectTo: '/'
		});
});

calendarApp.run(function($rootScope) {
 	$rootScope.api_token="AIzaSyC7f2KwPYNd5HmYP4_hcErwXeZ8W15wayI";
	$rootScope.cal_id="tan57hm2uk651omqga3k1ut49c@group.calendar.google.com";
	$rootScope.start_day=0;
	$rootScope.lang="en";
	$rootScope.day_length="dddd";
	$rootScope.cal_view="0";
});