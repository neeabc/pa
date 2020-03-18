app.controller('brandController' ,function($scope,$controller,brandService){

    $controller('baseController', {$scope: $scope});//继承

    $scope.findAll=function(){
        brandService.findAll().success(
            function(response){
                $scope.list=response;
            }
        );
    };

/*    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function () {
            $scope.selectids = new Set();
            $scope.reloadList();//重新加载
        }
    };*/

/*    $scope.reloadList = function () {
        //$scope.findPage($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
        $scope.search( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    };*/

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

/*    $scope.selectids = new Set();
    $scope.updateSelection = function($event,id){
        if($event.target.checked){
            $scope.selectids.add(id);
        }else{
            $scope.selectids.delete(id);
        }
    };*/

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