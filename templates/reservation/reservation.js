angular.module("myapp")
    .controller("reservation",function($scope){
            // 在实际应用中，预订信息从后端请求过来的
            // 这里模拟数据,用对象的方式来表达数据
            $scope.reservation = {
                    room:"1123",
                    checkin:new Date(),
                    checkout:new Date(Date.now() + 7*24*60*60*1000), // 预定一星期
                    wifi:"123456789",
                    price:100.00
            };
    });