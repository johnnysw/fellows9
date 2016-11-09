/**
	轮播图
*/
var carousel = (function(){

	var oCarousel = document.getElementById('carousel');
	var oCarouselNum = getByClass('carousel-num')[0];
	var oCarouselImg = getByClass('carousel-img')[0];

	var aBtn = oCarouselNum.getElementsByTagName('li');//轮播图切换按钮数组
	var aImg = oCarouselImg.getElementsByTagName('div');//轮播图图片数组

	var switchImg = function(index){
		for(var i=0; i<aBtn.length; i++){
			aBtn[i].className = '';//清空所有切换按钮的样式
		}
		if(index < aBtn.length){
			aBtn[index].className = 'active';//为当前按钮加入选中样式
		}else{
			aBtn[0].className = 'active';//为当前按钮加入选中样式
		}
		animate(oCarouselImg, {left: -index * aImg[0].offsetWidth});//动画，使oCarouselImg移动到指定的目标点
	};

	var timer = 0, //定时器
		index = 0; //轮播图片的当前索引

	return {
		init: function(){//初始化
			var that = this;//将this指针所指对象保存在that中，防止this指针指向错误
			// oCarouselImg.innerHTML += oCarouselImg.innerHTML;//复制轮播图中的所有图片一份，使得oCarouselImg中的图片长度增加一倍，这样做是为了使oCarouselImg可以无缝滚动
			oCarouselImg.style.width = aImg[0].offsetWidth * aImg.length + 'px';//设置oCarouselImg的宽度为所有图片的总长度，这样可以使用所有的图片水平排列
			//为轮播图切换按钮注册单击事件
			for(var i=0; i<aBtn.length; i++){
				aBtn[i].index = i;
				aBtn[i].onmouseover = function(){
					index = this.index;
					switchImg(this.index); 
				};
			}
			//鼠标滑过图片时暂停轮播
			oCarousel.onmouseover = function(){
				that.pause();
			};
			//鼠标滑出图片时恢复轮播
			oCarousel.onmouseout = function(){
				that.start();
			};

			that.start();//页面加载时启动定时器
		},
		start: function(){//开始轮播图
			timer = setInterval(function(){
				index++;
				if(index == aImg.length){//如果图片已到达最后一幅
					oCarouselImg.style.left = '0px';//将oCarouselImg拉回0位置处
					index = 1;//同时将索引置为1
				}
				switchImg(index);
			}, 2000);
		},
		pause: function(){//暂停轮播图
			clearInterval(timer);
		}
	};
})();

carousel.init();//启动轮播图

/**
	回到顶部
*/
var goTop = (function(){
	var oGoTop = document.getElementById('go-top');
	var iScrollTop;//滚动条高度
	return {
		init: function(){
			var that = this;
			oGoTop.onclick = function(){
				that.go();
			};

			addEvent(window, 'scroll', function(){
				iScrollTop = document.documentElement.scrollTop || document.body.scrollTop; //获取文档滚动条高度
				// console.log(iScrollTop);
				if(iScrollTop > 200){
					that.show();
				}else{
					that.hide();
				}
			});
		},
		show: function(){
			oGoTop.style.display = 'block';
		},
		hide: function(){
			oGoTop.style.display = 'none';
		},
		go: function(){
			var timer=setInterval(function(){
				iScrollTop = iScrollTop - 150; 
				if(iScrollTop < 100){
					iScrollTop = 0; 
					clearInterval(timer); 
				} 
				window.scrollTo(0, iScrollTop); 
			}, 10); 
		}
	};
})();

goTop.init();


/**
	导航栏固定
*/
var navbar = (function(){
	var oNav = document.getElementById('nav');
	var iTop = oNav.offsetTop;
	return {
		init: function(){
			var that = this;
			addEvent(window, 'scroll', function(){//使用事件绑定函数，否则后面注册的事件会将前面注册的事件覆盖
				var iScrollTop = document.documentElement.scrollTop || document.body.scrollTop; //获取文档滚动条高度
				if(iScrollTop >= iTop){
					that.fixed();
				}else{
					that.relative();
				}
			});
		},
		fixed: function(){
			oNav.className = 'fixed';
		},
		relative: function(){
			oNav.className = '';
		}
	};
})();

navbar.init();
