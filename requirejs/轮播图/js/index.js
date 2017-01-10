requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(["jquery", "carousel"], function($, Carousel){
    var imgs = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];
    var settings = {
        imgsUrl : imgs,
        buttonStyle: "circle",//square
        arrowsStyle: "bottom",//bottom
        speed: 500,
        location: "#container1"

    };
    var carousel = new Carousel(settings);
    carousel.init();

    var settings2 = {
        imgsUrl : imgs,
        buttonStyle: "square",//square
        arrowsStyle: "center",//bottom
        speed: 1000,
        location: "#container2"

    };
    var carousel2 = new Carousel(settings2);
    carousel2.init();

});