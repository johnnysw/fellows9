define(["b"], function(isArray){
    function arrSort(arr){
        if(isArray(arr)){
            arr.sort(function(a, b){
                return a - b;
            });
            return arr;
        }else{
            return "输入的参数不是数组";
        }
    }
    return arrSort;


});