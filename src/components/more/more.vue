<template>
	<div class="more clearfloat">
		<div class="floorhd">
			<div class="floorhd_inner">
				<h3 class="floorhd_tit">京东直播</h3>
			</div>
		</div>
		<div class="more_r">
			<ul class="more_list">
				<li class="more_item" v-for="val in more">
					<a href="#" class="more_lk">
						<div class="more_img">
							<img v-lazy="val.url" class="lazyimg_img">
						</div>
						<div class="more_info">
							<p class="more_info_name">{{val.tit}}</p>
							<p class="mod_price">
								<i>¥</i>
								<span class="more_info_price_txt">{{val.money}}</span>
							</p>
						</div>
					</a>
					<div class="more_find">
						<div class="more_find_btn" >
							<span>找相似</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import a from "../../assets/img/more1.jpg"
	export default {
		data(){
			return{
				more:[
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					},
					{
						"url":a,"tit":"诗邦 日式碗碟套装景德镇陶瓷器家用20头高档骨瓷餐具套装盘子碗具送礼品饭碗筷 起司猫","money":"58.00"
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.more {
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
		.more_r{
			.more_list {
			    margin: 0 -5px 0;
			    .more_item {
			    	&:hover .more_find_btn{
					
					    background-color: rgba(34, 34, 34, 0.85) !important;
					}
					
					&:hover .more_find{
						opacity: 1;
						
					}
					&:hover .more_info_name{
						color: red !important;
					}
				    position: relative;
				    float: left;
				    width: 230px;
				    height: 305px;
				    background: #fff;
				    margin: 0 5px 10px;
				    .more_lk {
					    display: block;
					    width: 100%;
					    height: 100%;
					    .more_img {
						    float: left;
						    width: 170px;
						    height: 170px;
						    margin: 30px 30px 20px;
						    transition: opacity ease .2s;
						    .lazyimg_img {
							    width: 100%;
							    height: 100%;
							}
						}
						.more_info {
						    clear: both;
						    padding: 20px 16px 0;
						    height: 65px;
						    line-height: 24px;
						    .more_info_name {
							    font-size: 14px;
							    text-align: center;
							    color: #333;
							    transition: color ease .2s;
							    white-space: nowrap;
							    overflow: hidden;
							    text-overflow: ellipsis;
							    
							}
							.mod_price {
							    text-align: center;
								font-size: 14px;
								color: #e33333 !important;
							}
						}
					}
					.more_find{
						position: absolute;
					    width: 100%;
					    height: 80px;
					    bottom: 0;
					    left: 0;
					    background: rgba(255, 255, 255, 0.8);
					    opacity: 0;
					    transition: opacity ease .2s;
						.more_find_btn {
							&:hover &:after{
								transform: scale(1);
								transition: all ease-out .2s !important;
								background: #000 !important;
							}
						    position: relative;
						    margin: 4px auto 0;
						    width: 60px;
						    height: 60px;
						    border-radius: 50%;
						    background: #222;
						    background-color: rgba(34, 34, 34, 0);
						    color: #fff;
						    text-align: center;
						    line-height: 60px;
						    cursor: pointer;
						    transition: all ease .4s;
						    overflow: hidden;
						    span {
						    	font-size: 12px;
							    position: relative;
							    z-index: 1;
							}
							&:after {
							    content: '';
							    position: absolute;
							    left: 50%;
							    top: 50%;
							    width: 100%;
							    height: 100%;
							    border-radius: 50%;
							    border: 0 solid rgba(34, 34, 34, 0.5);
							    transform: translate3d(-50%, -50%, 0);
							    transition: all ease-out .2s;
							    transform: scale(0);
							}
							
						}
					
					}
				}
				
			}
		}
	}
</style>