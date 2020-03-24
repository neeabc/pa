 //控制层 
app.controller('specificationController' ,function($scope,$controller,specificationService){
	
	$controller('bController',{$scope:$scope});//继承

    $scope.reloadList = function(){
    	$scope.pageObj.reloadList(specificationService.search);
	};

    $scope.updateSelection = function($event,id){
    	$scope.pageObj.updateSelection($event,id);
	};

    $scope.dele = function(){
    	$scope.pageObj.dele(specificationService.dele,$scope.reloadList());
	};

    //读取列表数据绑定到表单中  
	$scope.findAll=function(){
		specificationService.findAll().success(
			function(response){
				$scope.pageObj.list=response;
			}			
		);
	};
	
	//分页
	$scope.findPage=function(page,rows){			
		specificationService.findPage(page,rows).success(
			function(response){
				$scope.pageObj.list=response.rows;
				$scope.pageObj.conf.totalItems=response.total;//更新总记录数
			}			
		);
	};
	
	//查询实体 
	$scope.findOne=function(id){				
		specificationService.findOne(id).success(
			function(response){
				$scope.pageObj.entity = response;
			}
		);				
	};
	
	//保存 
	$scope.save=function(){
		$scope.pageObj.save(specificationService.add,specificationService.update,$scope.entity.specification.id);
	};

    //新增选项行
    $scope.addTableRow=function(){
        $scope.pageObj.entity['specificationOptionList'].push({});
    };

    $scope.deleTableRow=function(index){
        $scope.pageObj.entity['specificationOptionList'].splice(index,1);//删除
    };

});	