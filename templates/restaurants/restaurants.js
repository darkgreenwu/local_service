/**
 * Created by hxsd on 2016/11/23.
 */
angular.module("myapp")
    .controller("restaurants",function($scope,$http){
            // 在实际应用中，预订信息从后端请求过来的
            // 这里模拟数
            $http.get("restaurants.json").success(function(data){
                $scope.restaurant=data;
            })

    });