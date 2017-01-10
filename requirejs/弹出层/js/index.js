requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(["jquery", "dialog"], function($, Dialog){
    $("#open").on("click", function(){
        var settings = {
            width: 500,
            height: 400,
            title: "我的弹出层",
            content: "login.html"
        };
        var dialog = new Dialog(settings);
        dialog.open();

        var settings2 = {
            content: "login2.html"
        };
        var dialog2 = new Dialog();
        dialog2.open();
    });
});





