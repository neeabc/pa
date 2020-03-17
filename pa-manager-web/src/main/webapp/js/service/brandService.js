app.service('brandService',function ($http) {
    this.findAll = function () {
        return $http.get('../brand/findAll.do');
    };

    this.findPage = function (page, rows) {
        return $http.get('../brand/findPage.do?page=' + page + '&rows=' + rows)
    };

    this.findOne = function (id) {
        return $http.get("../brand/findOne.do?id="+id)
    };

    this.dele = function (list) {
        return $http.get("../brand/delete.do?ids="+list)
    };

    this.search=function(page,rows,entity){
        return $http.post('../brand/search.do?page='+page+"&rows="+rows, entity)
    };

    this.add = function (entity) {
        return $http.post("../brand/add.do",entity)
    };

    this.update = function (entity) {
        return $http.post("../brand/update.do",entity)
    };
});