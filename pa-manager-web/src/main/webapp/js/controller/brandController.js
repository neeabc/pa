app.controller('brandController' ,function($scope,$controller,brandService){

    $controller('bController', {$scope: $scope});//继承

    //删除方法
    $scope.dele = function(){
        $scope.pageObj.dele(brandService.dele,$scope.reloadList());
    };
    //添加或删除选中的数据的id
    $scope.updateSelection = function ($event,id){
        $scope.pageObj.updateSelection($event,id);
    };

    //查找所有数据
    $scope.findAll=function(){
        brandService.findAll().success(
            function(response){
                $scope.pageObj.list = response;
            }
        );
    };

    //缩短调用reloadList方法
    $scope.reloadList = function(){
        $scope.pageObj.reloadList(brandService.search);
    }


    //根据页数和每页多少条查找数据
    $scope.findPage = function (page, rows) {
        brandService.findPage(page,rows).success(
            function (response) {
                $scope.pageObj.list = response.rows;
                $scope.pageObj.conf.totalItems = response.total;//更新总记录数
            }
        );
    };

    //保存数据
    $scope.save = function () {
        $scope.pageObj.save(brandService.add,brandService.update,$scope.pageObj.entity.id);
    };

    $scope.findOne = function (id) {
        brandService.findOne(id).success(function (responce) {
            $scope.pageObj.entity = responce;
        })
    };
});