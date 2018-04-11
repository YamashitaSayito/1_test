<template>
	<div class="live clearfloat">
		<div class="floorhd">
			<div class="floorhd_inner">
				<h3 class="floorhd_tit">京东直播</h3>
			</div>
		</div>
		<div class="live_cont clearfloat">
			<div class="live_l">
				<div class="live_slider clearfloat">
					<a href="#" class="live_item" v-for="val in zhibol">
						<div class="live_img">
							<img v-lazy="val.url"/>
						</div>
						<div class="live_btn"></div>
						<div class="live_info">
							<p class="live_desc">{{val.name}}</p>
						</div>
					</a>
				</div>
			</div>
			<div class="live_c">
				<div class="live_slider clearfloat">
					<a href="#" class="live_item">
						<div class="live_img">
							<img src="../../assets/img/zhibo4.png"/>
						</div>
						<div class="live_btn"></div>
						<div class="live_info">
							<p class="live_title">蜜蜡荟萃春日潮搭</p>
							<p class="live_desc">现场不定时放漏关注可抽奖</p>
						</div>
					</a>
				</div>
			</div>
			<div class="live_r">
				<div class="live_slider clearfloat">
					<a href="#" class="live_item" v-for="val in zhibor">
						<div class="live_img">
							<img v-lazy="val.url"/>
						</div>
						<div class="live_btn"></div>
						<div class="live_info">
							<p class="live_desc">{{val.name}}</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import a from '../../assets/img/zhibo9.png'
	import b from '../../assets/img/zhibo1.png'
	import c from '../../assets/img/zhibo2.png'
	import d from '../../assets/img/zhibo3.png'
	
	import q from '../../assets/img/zhibo5.png'
	import w from '../../assets/img/zhibo6.png'
	import e from '../../assets/img/zhibo7.png'
	import r from '../../assets/img/zhibo8.png'
	export default {
		data(){
			return{
				zhibol:[
					{
						"url":a,"name":"无门槛5元优惠"
					},
					{
						"url":b,"name":"直播间限时秒杀"
					},
					{
						"url":c,"name":"玛瑙吊坠 手镯大放漏"
					},
					{
						"url":d,"name":"直播专享优惠"
					}
				],
				zhibor:[
					{
						"url":q,"name":"新品上市 满3免1  限今晚"
					},
					{
						"url":w,"name":"直播专享"
					},
					{
						"url":e,"name":"直播专享价"
					},
					{
						"url":r,"name":"无门槛5元优惠"
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.live {
		margin-top: 30px;
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
		.live_cont {
			.live_l {
				margin-right: 10px;
				float: left;
				width: 390px;
				position: relative;
				height: 450px;
				background: #fff;
				.live_slider{
					overflow: hidden;
    				padding: 15px;
    				.live_item{
    					position: relative;
    					display: block;
    					float: left;
					    width: 170px;
					    height: 190px;
					    margin: 5px;
					    .live_img {
						    width: 100%;
						    height: 100%;
						}
						.live_btn {
						    width: 44px;
						    height: 44px;
						    margin: -22px 0 0 -22px;
						    position: absolute;
						    top: 50%;
						    left: 50%;
						    background: url(//misc.360buyimg.com/mtd/pc/index_2017/2.0.1/static/images/live_btn.png) no-repeat;
						    background-size: 100% 100%;
						    z-index: 1;
						    opacity: 0.8;	
						}
						.live_info {
						    position: absolute;
						    width: 100%;
						    bottom: 25px;
						    text-align: center;
						    color: #fff;
						    z-index: 1;
						    .live_desc {
							    font-size: 14px;
							    height: 24px;
							    line-height: 24px;
							    padding: 0 10px;
							    white-space: nowrap;
							    overflow: hidden;
							    text-overflow: ellipsis;
							}
						}
						&:after {
						    content: '';
						    position: absolute;
						    width: 100%;
						    height: 100%;
						    top: 0;
						    left: 0;
						    background: rgba(0, 0, 0, 0.3);
						    transition: background ease .2s;
						}
						
    				}
				}
			}
			.live_c {
				margin-right: 10px;
				float: left;
				width: 390px;
				position: relative;
				height: 450px;
				background: #fff;
				.live_slider{
					overflow: hidden;
    				padding: 15px;
    				.live_item{
    					position: relative;
    					display: block;
    					float: left;
    					height: 370px;
					    margin: 5px;
					    .live_img {
						    width: 100%;
						    height: 100%;
						}
						.live_btn {
						    width: 44px;
						    height: 44px;
						    margin: -22px 0 0 -22px;
						    position: absolute;
						    top: 50%;
						    left: 50%;
						    background: url(//misc.360buyimg.com/mtd/pc/index_2017/2.0.1/static/images/live_btn.png) no-repeat;
						    background-size: 100% 100%;
						    z-index: 1;
						    opacity: 0.8;	
						}
						.live_info {
						    position: absolute;
						    width: 100%;
						    bottom: 25px;
						    text-align: center;
						    color: #fff;
						    z-index: 1;
						    .live_desc {
							    font-size: 14px;
							    height: 24px;
							    line-height: 24px;
							    padding: 0 10px;
							    white-space: nowrap;
							    overflow: hidden;
							    text-overflow: ellipsis;
							}
						}
						&:after {
						    content: '';
						    position: absolute;
						    width: 100%;
						    height: 100%;
						    top: 0;
						    left: 0;
						    background: rgba(0, 0, 0, 0.3);
						    transition: background ease .2s;
						}
						
    				}
				}
			}
			.live_r {
				float: left;
				width: 390px;
				position: relative;
				height: 450px;
				background: #fff;
				.live_slider{
					overflow: hidden;
    				padding: 15px;
    				.live_item{
    					position: relative;
    					display: block;
    					float: left;
					    width: 170px;
					    height: 190px;
					    margin: 5px;
					    .live_img {
						    width: 100%;
						    height: 100%;
						}
						.live_btn {
						    width: 44px;
						    height: 44px;
						    margin: -22px 0 0 -22px;
						    position: absolute;
						    top: 50%;
						    left: 50%;
						    background: url(//misc.360buyimg.com/mtd/pc/index_2017/2.0.1/static/images/live_btn.png) no-repeat;
						    background-size: 100% 100%;
						    z-index: 1;
						    opacity: 0.8;	
						}
						.live_info {
						    position: absolute;
						    width: 100%;
						    bottom: 25px;
						    text-align: center;
						    color: #fff;
						    z-index: 1;
						    .live_desc {
							    font-size: 14px;
							    height: 24px;
							    line-height: 24px;
							    padding: 0 10px;
							    white-space: nowrap;
							    overflow: hidden;
							    text-overflow: ellipsis;
							}
						}
						&:after {
						    content: '';
						    position: absolute;
						    width: 100%;
						    height: 100%;
						    top: 0;
						    left: 0;
						    background: rgba(0, 0, 0, 0.3);
						    transition: background ease .2s;
						}
						
    				}
				}
			}
		}
	}
</style>