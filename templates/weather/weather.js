
angular.module("myapp").controller("weather",function($scope,$http,$ionicLoading){
    //天气api
        var url="https://wthrcdn.etouch.cn/weather_mini?city=重庆";
    //显示加载图标
    $ionicLoading.show()
    //请求数据
    $http.get(url).success(function(data){
        $ionicLoading.hide();
        $scope.weather=data;
    })
})
