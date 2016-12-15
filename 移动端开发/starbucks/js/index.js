/**
 * Created by apple on 16/11/30.
 */
$(function(){
    eventType = isMobile() ?'tap':'click';
    $("#tab span").on(eventType,function(){

        var index = $(this).index();
        var imgNum = $(".slide-box li").size();
        var tabNum = $("#tab span:visible").size();
        var num = Math.ceil(imgNum/tabNum);
        console.log(num+"DDD"+index);
        var iLeft = -num*290*index;
        if(index == tabNum-1){
            iLeft = $(".slide-box").width()-$(".slide-box ul").width();
        }
        $(".slide-box ul").animate({
            left:iLeft
        })
    })
    $(window).resize(function(){
        iLeft = $(".slide-box").width()-$(".slide-box ul").width();
        $(".slide-box ul").css('left',iLeft);
    });
})