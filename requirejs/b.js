define(function(){
    function isArray(arr){
        if(arr instanceof Array){
            return true;
        }
        return false;
    }
    return isArray;
});