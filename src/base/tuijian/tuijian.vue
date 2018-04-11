<template>
	<div class="tuijian">
		<div class="floorhd">
			<div class="floorhd_inner">
				<h3 class="floorhd_tit">特色推荐</h3>
			</div>
		</div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="val in lbt">
					<div class="box_hd">
						<a href="#" class="box_hd_lk">
							<h3 class="box_tit">{{val.name}}</h3>
							<i class="box_hd_arrow"></i>
							<span class="box_subtit">{{val.tit}}</span>
						</a>
					</div>
					<img :src="val.imgs" class="swiper_img" />

				</div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
			<!-- Add Arrows -->
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
	</div>
</template>

<script>
	import a from '../../assets/img/tuijian1.jpg'
	import b from '../../assets/img/tuijian2.jpg'
	import c from '../../assets/img/tuijian3.jpg'
	import d from '../../assets/img/tuijian4.jpg'
	import e from '../../assets/img/tuijian5.jpg'
	import f from '../../assets/img/tuijian6.jpg'
	import g from '../../assets/img/tuijian7.jpg'
	import h from '../../assets/img/tuijian8.jpg'
	import i from '../../assets/img/tuijian9.jpg'

	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css';
	export default {
		data() {
			return {
				lbt: [{
						'imgs': a,
						"name": "京东金融",
						"tit": "会理财 懂生活"
					}, {
						'imgs': b,
						"name": "京东扶贫",
						"tit": "买特产  助扶贫"
					}, {
						'imgs': c,
						"name": "京东旅行",
						"tit": "踏青线路买一赠一"
					},
					{
						'imgs': d,
						"name": "品牌特卖",
						"tit": "品牌限时特卖"
					}, {
						'imgs': e,
						"name": "陪伴宝宝",
						"tit": "特价低至9.9"
					}, {
						'imgs': f,
						"name": "设计师推荐",
						"tit": "全球设计精选"
					},
					{
						'imgs': g,
						"name": "环球时尚",
						"tit": "环球名品，奢华精选"
					}, {
						'imgs': h,
						"name": "白条商城",
						"tit": "最高12期免息"
					}, {
						'imgs': i,
						"name": "司法拍卖",
						"tit": "法院好货 公开抢拍"
					}

				]
			}
		},
		mounted() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay : true,
				autoplayDisableOnInteraction : false,
				loop: true,
				spaceBetween: 30,
				slidesPerGroup: 3,
				loopFillGroupWithBlank: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				slidesPerView: 'auto',
				loopedSlides: 8,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			})
		}
	}
</script>

<style scoped lang="scss">
	.tuijian {
		.floorhd {
			height: 65px;
			.floorhd_inner {
				.floorhd_tit {
					position: relative;
					width: 150px;
					height: 45px;
					font-size: 28px;
					font-family: 'fzzzh';
					font-weight: normal;
					text-align: center;
					line-height: 45px;
					padding: 0 50px;
					margin: 0 auto 20px;
					overflow: hidden;
					color: #222;
					&:before,
					&:after {
						content: '';
						position: absolute;
						width: 50px;
						height: 3px;
						display: block;
						background: #222;
						top: 19px;
					}
					&:before {
						left: 0;
					}
					&:after {
						right: 0;
					}
				}
			}
		}
		.swiper-container {
			height: 350px;
			.swiper-wrapper {
				.swiper-slide {
					text-align: center;
					font-size: 18px;
					background: #fff;
					display: flex;
					justify-content: center;
					align-items: center;
					float: left;
					width: 386px;
					.box_hd {
						height: 60px;
						position: absolute;
						padding: 0 20px;
						font-size: 0;
						top: 0;
						left: 0;
						margin-bottom: 30px;
						.box_hd_lk {
							display: inline-block;
							position: relative;
							height: 40px;
							margin: 8px 0 0 0;
							.box_tit {
								float: left;
								font-weight: normal;
								font-size: 22px;
								color: #222;
								line-height: 44px;
							}
							.box_subtit {
								float: left;
								font-size: 14px;
								color: #999;
								height: 20px;
								line-height: 20px;
								margin: 12px 0 0 10px;
							}
							.box_hd_arrow {
								background-position: 0px 0px;
								float: left;
								position: relative;
								width: 23px;
								height: 23px;
								top: 11px;
								left: 4px;
								background-image: url(../../assets/img/list_cont_hd.png);
							}
						}
					}
					.swiper_img {
						margin-top: 60px;
					}
				}
			}
			.swiper-button-next{
				width: 20px;
				height: 20px;
				position: absolute;
				right:5px;
			}
			.swiper-button-prev{
				width: 20px;
				height: 20px;
				position: absolute;
				left:5px;
			}
			.swiper-pagination{
				bottom: 2px !important;
			}
		}
	}
</style>