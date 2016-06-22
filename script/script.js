var calendar = angular.module('calApp', ['ui.calendar']);

calendar.controller("calCtrl", function ($scope, $http, uiCalendarConfig) {  
   $scope.eventSources = [{
   		googleCalendarApiKey: 'AIzaSyC7f2KwPYNd5HmYP4_hcErwXeZ8W15wayI',
   		// url: 'https://calendar.google.com/calendar/ical/tan57hm2uk651omqga3k1ut49c%40group.calendar.google.com/public/basic.ics'
   		// url: 'https://calendar.google.com/calendar/ical/tan57hm2uk651omqga3k1ut49c%40group.calendar.google.com/private-14e4ef23343ba163c85713e442e310e0/basic.ics'
   		// url : 'https://calendar.google.com/calendar/embed?src=tan57hm2uk651omqga3k1ut49c%40group.calendar.google.com&ctz=Asia/Calcutta'
   	 	googleCalendarId: 'tan57hm2uk651omqga3k1ut49c@group.calendar.google.com'
   }];
   $scope.uiConfig = {
      calendar:{
        height: 500,
        editable: true,
        header:{
          left: '',
          center: 'title',
          right: 'today prev,next'
        }
      }
    };
});