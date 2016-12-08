define(["jquery"], function($){

    return {
        open : function(settings){
            var defaultSettings = {
                width: 400,
                height: 300,
                title: "弹出层",
                content: ""
            };
            $.extend(defaultSettings, settings);

            var html = '<div class="dialog-container">'
                 + '<div class="dialog-mask"></div>'
                 + '<div class="dialog-box">'
                     + '<div class="dialog-title">'
                         + '<div class="dialog-title-item">'+ defaultSettings.title +'</div>'
                         + '<div class="dialog-title-close">[X]</div>'
                     + '</div>'
                        + '<div class="dialog-content">'+ defaultSettings.content +'</div>'
                + '</div>'
                 + '</div>';
            $("body").append(html);
            $(".dialog-box").css({
                width: defaultSettings.width,
                height: defaultSettings.height,
                marginLeft: -defaultSettings.width / 2,
                marginTop: -defaultSettings.height / 2
            });
            $(".dialog-content").css({
                height: defaultSettings.height - 30
            });
            $(".dialog-title-close").on("click", function(){
                $(".dialog-container").remove();
            });
        }
    };
});