'use strict';

app.controller('total',function($scope,$resource){


    $scope.emailPlaceholder = 'Введите свой email!';
    $scope.checkEmailFormat = function(){
        if($scope.email===undefined || $scope.email==''){
            $scope.emailError = true;
            $scope.emailPlaceholder = 'Обязательно введите свой email адрес!';
        }else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($scope.email)){
            $scope.email = '';
            $scope.emailError = true;
            $scope.emailPlaceholder = 'Не правильно введен email!';
        }else{
            $scope.emailError = false;
        }
    }

    $scope.sendEmail = function(){
        $scope.checkEmailFormat();
        if($scope.emailError){
            $scope.resetInserted();
            $scope.sendResult = $scope.emailPlaceholder;
        }else{
            var adr = $resource('/sendEmail');
            var que = new adr();
            que.name = $scope.name;
            que.email = $scope.email;
            que.phone = $scope.phone;
            que.msg = $scope.msg;
            que.$save(function(){
                $scope.sendResult = 'Ваше сообщение успешно отправлено!';
            });
        }
    }

    $scope.resetInserted = function(){
        $scope.name='';
        $scope.email='';
        $scope.phone='';
        $scope.msg='';
    }
});