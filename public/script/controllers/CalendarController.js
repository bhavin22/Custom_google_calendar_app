calendarApp.controller('CalendarController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.api_token = $rootScope.api_token;
    $scope.cal_id = $rootScope.cal_id;
    $scope.start_day = $rootScope.start_day;
    $scope.lang = $rootScope.lang;
    $scope.day_length = $rootScope.day_length;
    $scope.cal_view = $rootScope.cal_view;

     $scope.setDayStyle = function () {
      window.setTimeout(function() {
        $("td:not(.fc-other-month)[data-date$='01']").addClass("first-day");
        $("td:not(.fc-other-month)[data-date$='01-31']").addClass("last-day");
        if($("td:not(.fc-other-month)[data-date$='02-29']").length !== 0) {
          $("td:not(.fc-other-month)[data-date$='02-29']").addClass("last-day");  
        } else {
          $("td:not(.fc-other-month)[data-date$='02-28']").addClass("last-day");  
        }
        $("td:not(.fc-other-month)[data-date$='03-31']").addClass("last-day");
        $("td:not(.fc-other-month)[data-date$='04-30']").addClass("last-day");
        $("td:not(.fc-other-month)[data-date$='05-31']").addClass("last-day");
        $("td:not(.fc-other-month)[data-date$='06-30']").addClass("last-day");
        $("td:not(.fc-other-month)[data-date$='07-31']").addClass("last-day");
        $("td:not(.fc-other-month)[data-date$='08-31']").addClass("last-day");
        $("td:not(.fc-other-month)[data-date$='09-30']").addClass("last-day");
        $("td:not(.fc-other-month)[data-date$='10-31']").addClass("last-day");
        $("td:not(.fc-other-month)[data-date$='11-30']").addClass("last-day");
        $("td:not(.fc-other-month)[data-date$='12-31']").addClass("last-day");

        // $(".fc-event-container").html("booked");
        // $(".fc-event-container").addClass("booked-day");
        //$(".fc-event-container").addClass("event-day");
      },2000);
    }

    $('.fc-next-button span').click(function(){
      $scope.setDayStyle();
    });

    $('.fc-prev-button span').click(function(){
      $scope.setDayStyle();
    });

    $scope.eventSources = {
     // url: 'http://www.google.com/calendar/feeds/{$scope.cal_id}@group.calendar.google.com/public/full?orderby=starttime&sortorder=ascending&futureevents=true&alt=json',
     // url: 'https://calendar.google.com/calendar/embed?src=poojarabhavin22%40gmail.com&ctz=Asia/Calcutta',
      //url: 'https://calendar.google.com/calendar/ical/tan57hm2uk651omqga3k1ut49c%40group.calendar.google.com/public/basic.ics',
      //url: 'https://calendar.google.com/calendar/embed?src=tan57hm2uk651omqga3k1ut49c%40group.calendar.google.com&ctz=Asia/Calcutta',
      //url: 'http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic#sthash.qN6k6pM0.dpuf',
      googleCalendarApiKey: $scope.api_token,
      googleCalendarId: $scope.cal_id,
      className: 'gcal-event'
    };
    
    $scope.now = new Date();
    $scope.arrMonths = [];
    $scope.arrMonths[0] = {
      year: parseInt($scope.now.getFullYear()), 
      month:parseInt($scope.now.getMonth()) + 1
    };

    $scope.eventRender = function(event, element, view) {
      $(".fc-event-container").html("booked");
      $(".fc-event-container").addClass("booked-day"); 
    }

    if($scope.cal_view === '0') {
      $scope.uiConfig = {
        calendar:{
          height: 450,
          editable: true,
          firstDay: $scope.start_day,
          lang: $scope.lang,
          columnFormat: $scope.day_length,
          header:{
            left: '',
            center: 'title',
            right: 'today prev,next'
          },
          eventRender: $scope.eventRender
        }
      };
    } else {
      
      for(var i=1; i<9; i++) {
        if($scope.arrMonths[i-1].month === 11) {
          $scope.arrMonths[i] = {
            year:$scope.arrMonths[i-1].year + 1, 
            month:1
          }
        } else {
          $scope.arrMonths[i] = {
            year:$scope.arrMonths[i-1].year, 
            month:$scope.arrMonths[i-1].month + 1
          }
        }
      }

      $scope.day_length = 'dd';

      $scope.uiConfig1 = {
        calendar:{
          height: 450,
          editable: true,
          firstDay: $scope.start_day,
          lang: $scope.lang,
          columnFormat: $scope.day_length,
          defaultDate: $scope.arrMonths[0].year + '-' + $scope.arrMonths[0].month,
          header:{
            left: '',
            center: 'title',
            right: ''
          }
        }
      };

      $scope.uiConfig2 = {
        calendar:{
          height: 450,
          editable: true,
          firstDay: $scope.start_day,
          lang: $scope.lang,
          columnFormat: $scope.day_length,
          defaultDate: $scope.arrMonths[1].year + '-' + $scope.arrMonths[1].month,
          header:{
            left: '',
            center: 'title',
            right: ''
          }
        }
      };

      $scope.uiConfig3 = {
        calendar:{
          height: 450,
          editable: true,
          firstDay: $scope.start_day,
          lang: $scope.lang,
          columnFormat: $scope.day_length,
          defaultDate: $scope.arrMonths[2].year + '-' + $scope.arrMonths[2].month,
          header:{
            left: '',
            center: 'title',
            right: ''
          }
        }
      };

      $scope.uiConfig4 = {
        calendar:{
          height: 450,
          editable: true,
          firstDay: $scope.start_day,
          lang: $scope.lang,
          columnFormat: $scope.day_length,
          defaultDate: $scope.arrMonths[3].year + '-' + $scope.arrMonths[3].month,
          header:{
            left: '',
            center: 'title',
            right: ''
          }
        }
      };

      $scope.uiConfig5 = {
        calendar:{
          height: 450,
          editable: true,
          firstDay: $scope.start_day,
          lang: $scope.lang,
          columnFormat: $scope.day_length,
          defaultDate: $scope.arrMonths[4].year + '-' + $scope.arrMonths[4].month,
          header:{
            left: '',
            center: 'title',
            right: ''
          }
        }
      };

      $scope.uiConfig6 = {
        calendar:{
          height: 450,
          editable: true,
          firstDay: $scope.start_day,
          lang: $scope.lang,
          columnFormat: $scope.day_length,
          defaultDate: $scope.arrMonths[5].year + '-' + $scope.arrMonths[5].month,
          header:{
            left: '',
            center: 'title',
            right: ''
          }
        }
      };

      $scope.uiConfig7 = {
        calendar:{
          height: 450,
          editable: true,
          firstDay: $scope.start_day,
          lang: $scope.lang,
          columnFormat: $scope.day_length,
          defaultDate: $scope.arrMonths[6].year + '-' + $scope.arrMonths[6].month,
          header:{
            left: '',
            center: 'title',
            right: ''
          }
        }
      };

      $scope.uiConfig8 = {
        calendar:{
          height: 450,
          editable: true,
          firstDay: $scope.start_day,
          lang: $scope.lang,
          columnFormat: $scope.day_length,
          defaultDate: $scope.arrMonths[7].year + '-' + $scope.arrMonths[7].month,
          header:{
            left: '',
            center: 'title',
            right: ''
          }
        }
      };

      $scope.uiConfig9 = {
        calendar:{
          height: 450,
          editable: true,
          firstDay: $scope.start_day,
          lang: $scope.lang,
          columnFormat: $scope.day_length,
          defaultDate: $scope.arrMonths[8].year + '-' + $scope.arrMonths[8].month,
          header:{
            left: '',
            center: 'title',
            right: ''
          }
        }
      };

      window.setTimeout(function() {
        $(".fc-basic-view .fc-body .fc-row").addClass("small-cal-row");
      },1000);
    }

    $scope.setDayStyle();
}]);