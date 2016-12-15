define(["jquery"], function($){
    function Carousel(settings){//类
        this.defaultSettings = {
            imgsUrl: [],
            buttonStyle: "circle",//square
            arrowsStyle: "bottom",//center
            speed: 500,
            location: "body"
        };
        $.extend(this.defaultSettings, settings);
        this.$container = $('<div class="carousel-container"></div>');
        this.$imgs = $('<div class="carousel-imgs"></div>');
        this.$tab = $('<ul class="carousel-tabs"></ul>');
        this.$arrows = $('<div class="carousel-arrows"></div>').addClass(this.defaultSettings.arrowsStyle);
        this.$prev = $('<span class="carousel-arrows-prev">&lt;</span>').addClass(this.defaultSettings.arrowsStyle);
        this.$next = $('<span class="carousel-arrows-next">&gt;</span>').addClass(this.defaultSettings.arrowsStyle);
    }
    Carousel.prototype.init = function(){
        var nowIdx = 0;
        var _this = this;
        for(var i=0; i<this.defaultSettings.imgsUrl.length; i++){
            this.$imgs.append($("<img src='"+ this.defaultSettings.imgsUrl[i] +"'>"));
            this.$tab.append($("<li>"+ (this.defaultSettings.buttonStyle == "circle"?"":(i + 1)) +"</li>"));
        }
        $('img:first-child', this.$imgs).addClass("selected");
        $('li:first-child', this.$tab).addClass("selected");
        this.$arrows.append(this.$prev).append(this.$next);
        this.$container.append(this.$imgs).append(this.$tab).append(this.$arrows);
        $(this.defaultSettings.location).append(this.$container);

        $("li", this.$tab).addClass(this.defaultSettings.buttonStyle);

        $("li", this.$tab).on("mouseover", function(){
            nowIdx = $(this).index();
            changeImg();
        });
        this.$prev.on("click", function(){
            nowIdx--;
            if(nowIdx == -1){
                nowIdx = _this.defaultSettings.imgsUrl.length - 1;
            }
            changeImg();
        });
        this.$next.on("click", function(){
            nowIdx++;
            if(nowIdx == _this.defaultSettings.imgsUrl.length){
                nowIdx = 0;
            }
            changeImg();
        });

        play();
        this.$container.hover(function(){
            clearInterval(_this.timer);
        }, function(){
            play();
        });

        function play(){
            _this.timer = setInterval(function(){
                _this.$next.trigger("click");
            }, _this.defaultSettings.speed);
        }

        function changeImg(){
            $("img", _this.$imgs).eq(nowIdx).addClass("selected").siblings().removeClass("selected");
            $("li", _this.$tab).eq(nowIdx).addClass("selected").siblings().removeClass("selected");
        }



    };

    return Carousel;


});