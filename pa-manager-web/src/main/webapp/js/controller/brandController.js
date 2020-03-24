app.controller('brandController' ,function($scope,$controller,brandService){

    $controller('bController', {$scope: $scope});//继承

    $scope.findAll=function(){
        brandService.findAll().success(
            function(response){
                $scope.list=response;
            }
        );
    };

    $scope.findPage = function (page, rows) {
        brandService.findPage(page,rows).success(
            function (response) {
                $scope.list = response.rows;
                $scope.paginationConf.totalItems = response.total;//更新总记录数
            }
        );
    };

    $scope.save = function () {
        var m;
        if($scope.entity.id!=null){
            m = brandService.update($scope.entity);
        }else{
            m = brandService.add($scope.entity);
        }

        m.success(function (responce) {
            if (responce.success){
                $scope.reloadList();
            } else{
                alert(responce.msg);
            }
        })
    };

    $scope.findOne = function (id) {
        brandService.findOne(id).success(function (responce) {
            $scope.entity = responce;
        })
    };

    $scope.dele = function () {
        var list = [];
        $scope.selectids.forEach(function (id) {
            list.push(id);
        });
        brandService.dele(list).success(function (response) {
            if(response.success){
                $scope.reloadList();
            }else{
                alert(response.message);
            }
        })
    };

    $scope.searchEntity = {};
    $scope.search=function(page,rows){
        brandService.search(page,rows,$scope.searchEntity).success(
            function(response){
                $scope.paginationConf.totalItems=response.total;//总记录数
                $scope.list=response.rows;//给列表变量赋值
            }
        );
    }

});