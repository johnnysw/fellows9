/*requirejs*/
define(["a"], function(arrSort){
    var arr = [2, 3, 44, 4, 1];
    console.log(arrSort(arr));
});


/*seajs*/
/*define(function(require){
    var arr = [2, 3, 44, 4, 1];
    var arrSort = require("a");
    console.log(arrSort(arr));
});*/


/*
AMD:异步模块定义 推崇依赖前置
CMD:通用模块定义 推崇依赖就近





* */