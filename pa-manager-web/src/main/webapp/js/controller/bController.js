app.controller('bController' ,function($scope){
    /*
        conf:翻页的配置
        setChange(callback):设定翻页的函数
        list:保存数据库查询到的数据
        selectids:保存选中的id
        addSelectids(id)
        delSelectids(id)
        getSelectids()
        cleSelectids():返回所有id,并清除id列表
        updateSelection($event,id):触发checked事件,添加或删除id到selectids
        dele(serviceFunc,callback):传入service的dele接口,和删除后的回调函数
        searchEntity:保存查找条件
        cleSearchEntity():返回查找条件,并清除
        reloadList(serviceFunc):传入刷新的service方法
        entity:保存单条数据
        cleEntity():返回单条数据,并删除
        save(serviceAddFunc,serviceUpdateFunc,id):空id,使用serviceAddFunc,有id,使用serviceUpdateFunc
    */

    $scope.pageObj = {
        //翻页标签的参数
        conf:{
            currentPage: 1, //当前页面
            totalItems: 10,
            itemsPerPage: 10, //每页多少条数据
            perPageOptions: [10, 20, 30, 40, 50],
            onchange:function () { //默认翻页函数
                this.cleSelectids();
                this.reloadList();//重新加载
            }
        },

        //设定翻页的函数
        setChange:function (callback) {
            this.conf.onchange = callback;
        },

        //保存数据库查询到的数据
        list:{},

        //保存选中的id
        selectids:new Set(),
        addSelectids:function (id) {
            this.selectids.add(id);
        },
        delSelectids:function (id) {
            this.selectids.delete(id);
        },
        getSelectids:function () {
            var list = [];
            this.selectids.forEach(function (id) {
                list.push(id);
            });
            return ids;
        },
        //返回所有id,并清除id列表
        cleSelectids:function(){
            var ids = this.getSelectids();
            this.selectids = new Set();
            return ids;
        },

        //触发checked事件,添加或删除id到selectids
        updateSelection:function($event,id){
            if($event.target.checked){
                this.addSelectids(id);
            }else{
                this.delSelectids(id);
            }
        },

        //删除方法,通过getSelectids获取要删除的id,传入service的dele接口,和删除后的回调函数
        dele:function (serviceFunc,callback) {
            var ids = this.cleSelectids();
            serviceFunc(ids).success(function (response) {
                if(response.success){
                    callback();
                }else{
                    alert(response.message);
                }
            })
        },

        //保存查找条件
        searchEntity:{},
        //返回查找条件,并清除
        cleSearchEntity:function(){
            var entity = searchEntity;
            this.searchEntity = {};
            return entity;
        },

        //使用reloadList可以使用search函数,会传入指定的参数
        reloadList:function(serviceFunc){
            serviceFunc(
                this.pageObj.conf.currentPage
                ,this.pageObj.conf.itemsPerPage
                ,this.pageObj.cleSearchEntity()
            ).success(function (response) {
                $scope.pageObj.conf.totalItems=response.total;//总记录数
                $scope.pageObj.list = response.rows;//给列表变量赋值
            });
        },

        //保存单条数据
        entity:{},
        //返回单条数据,并删除
        cleEntity:function () {
            var e = this.entity;
            this.entity = {};
            return e;
        },

        save:function (serviceAddFunc,serviceUpdateFunc,id) {
            var m;
            if(id){
                m = serviceAddFunc(this.cleEntity());
            }else{
                m = serviceUpdateFunc(this.cleEntity());
            }
            m.success(function (responce) {
                if (responce.success){
                    this.reloadList();
                } else{
                    alert(responce.msg);
                }
            })
        }
    };
});