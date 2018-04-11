<template>

	<div id="carousel" class="carousel" @mouseover="isCarousel=true" @mouseout="isCarousel=false">

		<div class="carousel-inner">
			<transition name="carousel-animates" enter-class="carousel-animate-enter" leave-class="carousel-animate-leave" :leave-active-class="leaveToClass">
				<template>
					<div class="item" :key="active">
						<a :href="carousel[active].url" :title="carousel[active].title">
							<img :src="carousel[active].image" alt="">
						</a>
					</div>
				</template>
			</transition>
		</div>
		<ol class="carousel-indicators">
			<li @click="move(active>index?-1:1,index)" v-for="(item,index) in carousel" :key="index" :class="index===active?'item active':'item'">{{index+1}}</li>
		</ol>
		<a @click="move(-1)" class="left carousel-control"><i class="iconfont icon-zuo"><</i></a>
		<a @click="move(1)" class="right carousel-control"><i class="iconfont icon-you">></i></a>
	</div>
</template>

<script>
	import img1 from '../../assets/img/ad1.jpg'
	import img2 from '../../assets/img/ad2.jpg'
	import img3 from '../../assets/img/ad3.jpg'
	import img4 from '../../assets/img/ad4.jpg'
	import img5 from '../../assets/img/ad5.jpg'
	import img6 from '../../assets/img/ad6.jpg'
	//轮播内容
	var carousels = [{
			"url": "#",
			"image": img1,
			"title": "xxx"
		},
		{
			"url": "#",
			"image": img2,
			"title": "xx"
		},
		{
			"url": "#",
			"image": img3,
			"title": "x"
		},
		{
			"url": "#",
			"image": img4,
			"title": "xxx"
		},
		{
			"url": "#",
			"image": img5,
			"title": "xx"
		},
		{
			"url": "#",
			"image": img6,
			"title": "x"
		}
	]
	export default {
		data() {
			return {
				active: -1, //当前轮播图位置
				carousel: carousels, //轮播内容
				times: null, //定时器
				isCarousel: false, //是否鼠标移入暂停轮播
				leaveToClass: "", //轮播图片离开时的动画，不同方向，动画不同
				interval: 3000 //每张图片的间隔空隙
			}
		},
		methods: {
			carouselAnimate: function() { //轮播动画
				if(!this.isCarousel) {
					this.move(1);
				} //如果没有鼠标移入暂停轮播，则轮播下一张图
				setTimeout(this.carouselAnimate.bind(this), this.interval)
			},
			move: function(direction, index) { //direction为轮播方向，正数为右，负数为左。index为当前轮播图
				var num = this.active;
				num = index !== undefined ? index : num + direction;

				num = num >= this.carousel.length ? 0 :
					num < 0 ? this.carousel.length - 1 : num;

				this.active = num;

				this.leaveToClass = direction > 0 ? "carousel-animate-leave-to-left" : "carousel-animate-leave-to-right";
			}
		},
		created: function() { //创建实例之后获取

			var images = [];
			for(var i = 0; i < this.carousel.length; i++) { //预加载图片
				images[i] = new Image();
				images[i].src = this.carousel[i].image;
			}

			if(this.carousel === undefined || Object.prototype.toString.call(this.carousel) !== '[object Array]') {
				console.error("请正确设置您的轮播内容");
			} else if(this.carousel.length < 1) {
				console.warn("轮播图少于一张，无法轮播")
			} else {
				this.carouselAnimate(); //开始轮播
			}
		},
		destroyed: function() { //销毁组件时清除定时器
			clearTimeout(this.times)
		}
	}
</script>

<style>

	.carousel {
	  margin-left: 10px;
	  margin-top: 10px;
	  position: relative;
	  overflow: hidden;
	  float: left;
	}
	.carousel:hover .carousel-control.left {
	
	  transform: translateX(100%);
	}
	.carousel:hover .carousel-control.right {
	 
	  transform: translateX(-100%);
	}
	.carousel-inner {
	  position: relative;
	  overflow: hidden;
	  width: 590px;
	  font-size: 0;
	
	}
	.carousel-inner > .item {
	  height: 470px;
	  position: relative;
	  transition: all 0.5s ease-in-out;
	}
	.carousel-inner > .item > img,
	.carousel-inner > .item > a > img {
	  width: 100%;
	  height: 100%;
	}
	.carousel-indicators {
	  position: absolute;
	  bottom: 10px;
	  right: 10px;
	  z-index: 15;
	  list-style: none;
	  text-align: right;
	}
	.carousel-indicators li {
	  display: inline-block;
	  width: 20px;
	  height: 20px;
	  line-height: 20px;
	  margin: 0 5px;
	  font-size: 12px;
	  color: #fff;
	  background-color: #000 \9;
	  background-color: rgba(0, 0, 0, 0);
	  border: 1px solid rgba(0, 0, 0, 0.6);
	  cursor: pointer;
	  text-align: center;
	  
	  transition: all 0.5s ease-in-out;
	  user-select: none;
	}
	.carousel-indicators li.active {
	  background-color: rgba(0, 0, 0, 0.6);
	}
	.carousel-control {
	  position: absolute;
	  top: 50%;
	  width: 20px;	
	  color: hsla(0,0%,100%,.4);
	  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
	  background: rgba(0, 0, 0, 0.4);
	  cursor: pointer;
	  text-align: center;
	
	  transition: all 0.5s ease-in-out;
	}
	.carousel-control .iconfont {
	  font-size: 20px;
	  color:#FFFFFF;
	  margin-top: -30px;
	}
	.carousel-control.left {
	  left: -20px;
	}
	.carousel-control.right {
	  right: -20px;
	}
	.carousel-control:hover,
	.carousel-control:focus {
	  outline: 0;
	  color: #fff;
	  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
	  text-decoration: none;
	  background: rgba(0, 0, 0, 0.6);
	}
	.carousel-animate-enter {
	  opacity: 0;
	
	  transform: scale(0.8, 0.8);
	}
	.carousel-animate-leave {
	  position: absolute!important;
	  top: 0;
	  width: 100%;
	}
	.carousel-animate-leave-to-left,
	.carousel-animate-leave-to-right {
	  position: absolute!important;
	  top: 0;
	  width: 100%;
	  z-index: 10;
	}
	.carousel-animate-leave-to-left {
	
	  transform: translateX(-100%) scale(0.8, 0.8);
	}
	.carousel-animate-leave-to-right {
	
	  transform: translateX(100%) scale(0.8, 0.8);
	}
	
	
	
</style>