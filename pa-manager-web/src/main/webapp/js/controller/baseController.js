app.controller('baseController' ,function($scope){


    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function () {
            $scope.selectids = new Set();
            $scope.reloadList();//重新加载
        }
    };

    $scope.reloadList = function () {
        //$scope.findPage($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
        $scope.search( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    };


    $scope.selectids = new Set();
    $scope.updateSelection = function($event,id){
        if($event.target.checked){
            $scope.selectids.add(id);
        }else{
            $scope.selectids.delete(id);
        }
    };

});