
var myapp=angular.module("myapp",["ionic"]);


//配置路由
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("tour",{
            url:"/tour",
            templateUrl:"templates/tour/tour.html"
        })
        .state("home",{
            url:"/home",
            templateUrl:"templates/home/home.html"
        })
        .state("reservation",{
            url:"/reservation",
            templateUrl:"templates/reservation/reservation.html",
            controller:"reservation"
        })
        .state("restaurants",{
            url:"/restaurants",
            templateUrl:"templates/restaurants/restaurants.html",
            controller:"restaurants"
        })
        .state("weather",{
            url:"/weather",
            templateUrl:"templates/weather/weather.html",
            controller:"weather"
        })
    //默认路由
    $urlRouterProvider.otherwise("/tour");
})
