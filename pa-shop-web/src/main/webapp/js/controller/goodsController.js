 //控制层 
app.controller('goodsController' ,function($scope,$controller,goodsService,uploadService,itemCatService, typeTemplateService){
	
	$controller('baseController',{$scope:$scope});//继承
	
    //读取列表数据绑定到表单中  
	$scope.findAll=function(){
		goodsService.findAll().success(
			function(response){
				$scope.list=response;
			}			
		);
	}    
	
	//分页
	$scope.findPage=function(page,rows){			
		goodsService.findPage(page,rows).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
	
	//查询实体 
	$scope.findOne=function(id){				
		goodsService.findOne(id).success(
			function(response){
				$scope.entity= response;					
			}
		);				
	}
	
	//保存 
	$scope.save=function(){				
		var serviceObject;//服务层对象  				
		if($scope.entity.id!=null){//如果有ID
			serviceObject=goodsService.update( $scope.entity ); //修改  
		}else{
			serviceObject=goodsService.add( $scope.entity  );//增加 
		}				
		serviceObject.success(
			function(response){
				if(response.success){
					//重新查询 
		        	$scope.reloadList();//重新加载
				}else{
					alert(response.message);
				}
			}		
		);				
	}
	
	 
	//批量删除 
	$scope.dele=function(){			
		//获取选中的复选框			
		goodsService.dele( $scope.selectIds ).success(
			function(response){
				if(response.success){
					$scope.reloadList();//刷新列表
					$scope.selectIds=[];
				}						
			}		
		);				
	}
	
	$scope.searchEntity={};//定义搜索对象 
	
	//搜索
	$scope.search=function(page,rows){			
		goodsService.search(page,rows,$scope.searchEntity).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}

    //保存
    $scope.add=function(){
        $scope.entity.goodsDesc.introduction=editor.html();
        goodsService.add( $scope.entity  ).success(
            function(response){
                if(response.success){
                    alert('保存成功');
                    $scope.entity={};
                    editor.html('');
                }else{
                    alert(response.message);
                }
            }
        );
    }

    /**
     * 上传图片
     */
    $scope.uploadFile=function(){
        uploadService.uploadFile().success(function(response) {
            if(response.success){//如果上传成功，取出url
                $scope.image_entity.url=response.message;//设置文件地址
            }else{
                alert(response.message);
            }
        }).error(function() {
            alert("上传发生错误");
        });
    };

    $scope.entity={goods:{},goodsDesc:{itemImages:[]}};//定义页面实体结构
    //添加图片列表
    $scope.add_image_entity=function(){
        $scope.entity.goodsDesc.itemImages.push($scope.image_entity);
    }

    //列表中移除图片
    $scope.remove_image_entity=function(index){
        $scope.entity.goodsDesc.itemImages.splice(index,1);
    }

    //读取一级分类
    $scope.selectItemCat1List = function () {
        itemCatService.findByParentId(0).success(
            function (response) {
                $scope.itemCat1List = response;
            }
        );
    }

    //读取二级分类
    //$watch方法用于监控某个变量的值，当被监控的值发生变化，就自动执行相应的函数
    $scope.$watch('entity.goods.category1Id', function(newValue, oldValue) {
        //判断一级分类有选择具体分类值，在去获取二级分类
        if(newValue){
            //根据选择的值，查询二级分类
            itemCatService.findByParentId(newValue).success(
                function(response){
                    $scope.itemCat2List=response;
                }
            );
        }
    });

    //读取三级分类
    $scope.$watch('entity.goods.category2Id', function(newValue, oldValue) {
        //判断二级分类有选择具体分类值，在去获取三级分类
        if(newValue){
            //根据选择的值，查询二级分类
            itemCatService.findByParentId(newValue).success(
                function(response){
                    $scope.itemCat3List=response;
                }
            );
        }
    });

    //三级分类选择后  读取模板ID
    $scope.$watch('entity.goods.category3Id', function(newValue, oldValue) {
        //判断三级分类被选中，在去获取更新模板id
        if(newValue){
            itemCatService.findOne(newValue).success(
                function(response){
                    $scope.entity.goods.typeTemplateId=response.typeId; //更新模板ID
                }
            );
        }
    });

    //模板ID选择后  更新品牌列表
    $scope.$watch('entity.goods.typeTemplateId', function(newValue, oldValue) {
        if(newValue){
            typeTemplateService.findOne(newValue).success(
                function(response){
                    $scope.typeTemplate=response;//获取类型模板
                    $scope.typeTemplate.brandIds= JSON.parse( $scope.typeTemplate.brandIds);//品牌列表
                    $scope.entity.goodsDesc.customAttributeItems=JSON.parse( $scope.typeTemplate.customAttributeItems);//扩展属性
                }
            );
            //查询规格列表
            typeTemplateService.findSpecList(newValue).success(
                function(response){
                    $scope.specList=response;
                }
            );
        }
    });

    $scope.entity={ goodsDesc:{itemImages:[],specificationItems:[]}  };

    $scope.updateSpecAttribute=function($event,name,value){
        var object= $scope.searchObjectByKey($scope.entity.goodsDesc.specificationItems ,'attributeName', name);
        if(object!=null){
            if($event.target.checked ){
                object.attributeValue.push(value);
            }else{
                //取消勾选
                object.attributeValue.splice( object.attributeValue.indexOf(value ) ,1);//移除选项
                //如果选项都取消了，将此条记录移除
                if(object.attributeValue.length==0){
                    $scope.entity.goodsDesc.specificationItems.splice($scope.entity.goodsDesc.specificationItems.indexOf(object),1);
                }
            }
        }else{
            $scope.entity.goodsDesc.specificationItems.push({"attributeName":name,"attributeValue":[value]});
        }
    }

    //创建SKU列表
    $scope.createItemList=function(){
        $scope.entity.itemList=[{spec:{},price:0,num:99999,status:'0',isDefault:'0' } ];//初始
        var items=  $scope.entity.goodsDesc.specificationItems;
        for(var i=0;i< items.length;i++){
            $scope.entity.itemList = addColumn( $scope.entity.itemList,items[i].attributeName,items[i].attributeValue );
        }
    }
    //添加列值
    addColumn=function(list,columnName,conlumnValues){
        var newList=[];//新的集合
        for(var i=0;i<list.length;i++){
            var oldRow= list[i];
            for(var j=0;j<conlumnValues.length;j++){
                var newRow= JSON.parse( JSON.stringify( oldRow )  );//深克隆
                newRow.spec[columnName]=conlumnValues[j];
                newList.push(newRow);
            }
        }
        return newList;
    }
});	