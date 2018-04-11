<template>
	<div id="seckill">
			<div><!--1546218000-->
				<count-down :callback="1546218000" ></count-down>
			</div>
			<div class="sk_bd">
				<div class="sk_list">
					<div class="sk_list_inner">
						<div class="sk_item">
							<a class="sk_item_lk">
								<div class="sk_item_img">
									<img src="../../assets/img/xiaomi.png"/>
								</div>
								<p class="sk_item_name">夏普 (SHARP) LCD-50SU671A 50英寸4K超高清 HDR 人工智能语音 wifi智能网络液晶平板电视</p>
								<div class="sk_item_price"><span class="mod_price sk_item_price_new"><i>¥</i><span>3388.00</span></span><span class="mod_price sk_item_price_origin"><i>¥</i><span>5499.00</span></span></div>
							</a>
						</div>
						<div class="sk_item">
							<a class="sk_item_lk">
								<div class="sk_item_img">
									<img src="../../assets/img/xiaomi.png"/>
								</div>
								<p class="sk_item_name">夏普 (SHARP) LCD-50SU671A 50英寸4K超高清 HDR 人工智能语音 wifi智能网络液晶平板电视</p>
								<div class="sk_item_price"><span class="mod_price sk_item_price_new"><i>¥</i><span>3388.00</span></span><span class="mod_price sk_item_price_origin"><i>¥</i><span>5499.00</span></span></div>
							</a>
						</div>
						<div class="sk_item">
							<a class="sk_item_lk">
								<div class="sk_item_img">
									<img src="../../assets/img/xiaomi.png"/>
								</div>
								<p class="sk_item_name">夏普 (SHARP) LCD-50SU671A 50英寸4K超高清 HDR 人工智能语音 wifi智能网络液晶平板电视</p>
								<div class="sk_item_price"><span class="mod_price sk_item_price_new"><i>¥</i><span>3388.00</span></span><span class="mod_price sk_item_price_origin"><i>¥</i><span>5499.00</span></span></div>
							</a>
						</div>
						<div class="sk_item">
							<a class="sk_item_lk">
								<div class="sk_item_img">
									<img src="../../assets/img/xiaomi.png"/>
								</div>
								<p class="sk_item_name">夏普 (SHARP) LCD-50SU671A 50英寸4K超高清 HDR 人工智能语音 wifi智能网络液晶平板电视</p>
								<div class="sk_item_price"><span class="mod_price sk_item_price_new"><i>¥</i><span>3388.00</span></span><span class="mod_price sk_item_price_origin"><i>¥</i><span>5499.00</span></span></div>
							</a>
						</div>
						
					</div>
				</div>
				<div class="sk_chn">
					<kill-sile :slides="slides"></kill-sile>
				</div>
			</div>
	</div>
</template>

<script>
	import CountDown from 'base/daojishi/daojishi'
	import KillSile from 'components/killsile/killsile'
	export default{
		data(){
			return{
				 slides: [
			        {
			          src: require('../../assets/img/killsile1.jpg')
			        },
			        {
			          src: require('../../assets/img/killsile2.jpg')
			        }
			      ],
			      content: ''
			}
		},
		components:{
			KillSile,
			CountDown
		}
	}
</script>

<style lang="scss" scoped>
	#seckill{
		margin-top: 30px;
		background: #fff;
    	overflow: hidden;
    	.sk_hd {
    		position: relative;
		    float: left;
		    width: 190px;
		    height: 275px;
		    background: #e83632;
		    color: #fff;
		    .sk_hd_lk {
		    	display: block;
			    width: 100%;
			    height: 100%;
			    color: #fff;
			    .sk_tit {
			    	position: absolute;
				    left: 0;
				    width: 100%;
				    text-align: center;
				    top: 42px;
				    font-size: 34px;
			    }
			    .sk_subtit{
			    	position: absolute;
				    left: 0;
				    width: 100%;
				    text-align: center;
				    top: 90px;
				    color: #f19999;
				    color: rgba(255, 255, 255, 0.5);
				    font-size: 20px;
			    }
			    .sk_ico{
			    	position: absolute;
					left: 86px;
					top: 126px;
					display: block;
					width: 20px;
					height: 33px;
					background-image: url(//misc.360buyimg.com/mtd/pc/index_2017/2.0.1/static/images/sprite.seckill.png);
					background-position: -35px -25px;
				}
				.sk_desc {
					position: absolute;
					left: 0;
					width: 100%;
					text-align: center;
					top: 170px;
					font-size: 16px;
				}
				.sk_cd {
				    position: absolute;
				    top: 212px;
				    left: 30px;
				    height: 40px;
				    .cd_item {
					    position: relative;
					    float: left;
					    width: 40px;
					    height: 40px;
					    text-align: center;
					    background-color: #2f3430;
					    margin-right: 5px;
					    &:before {
						    content: '';
						    display: block;
						    position: absolute;
						    left: 0;
						    width: 100%;
						    top: 50%;
						    height: 1px;
						    background: #e83632;
						}
					    .cd_item_txt {
						    position: relative;
						    line-height: 40px;
						    font-weight: bold;
						    font-size: 20px;
						}
					}
				}
		    }
    	}
    	/*秒杀右*/
    	.sk_bd{
    		
    		.sk_list {
			    position: relative;
			    float: left;
			    width: 805px;
			    border-right: solid 1px #f0f0f0;
			    height: 275px;
			    overflow: hidden;
			    .sk_list_inner{
			    	position: relative;
				    width: 805;
				    height: 275px;
				    .sk_item {
					    position: relative;
					    float: left;
					    width: 200px;
					    height: 275px;
					    border-left: 1px solid rgb(245,245,245);
					    .sk_item_lk {
						    position: relative;
						    display: block;
						    width: 185px;
						    height: 275px;
						    text-align: center;
						    margin: auto;
						    .sk_item_img{
						    	position: absolute;
							    width: 140px;
							    height: 140px;
							    left: 50%;
							    margin-left: -70px;
							    top: 40px;
						    }
						    .sk_item_name {
							    position: absolute;
							    top: 190px;
							    left: 0;
							    width: 160px;
							    padding: 0 15px;
							    line-height: 30px;
							    text-overflow: ellipsis;
							    overflow: hidden;
							    white-space: nowrap;
							}
							.sk_item_price {
							    position: absolute;
							    left: 15px;
							    top: 230px;
							    width: 160px;
							    height: 20px;
							    padding: 1px;
							    background: #e6382f;
							    line-height: 20px;
							    .sk_item_price_new {
								    float: left;
								    width: 80px;
								    height: 20px;
								    text-align: center;
								    color: #fff;
								    font-size: 14px;
								    font-weight: bold;
								}
								.sk_item_price_origin {
								    float: left;
								    width: 80px;
								    height: 20px;
								    background: #fff;
								    text-align: center;
								    color: #b7bcb8;
								    font-size: 12px;
								    text-decoration: line-through;
								    i {
									    margin-right: 3px;
									    font-family: arial;
									    font-weight: 400;
									    font-size: 12px;
									}
								}
							}
						}
					}
			    }
			}
    	}
    	.sk_chn{
    		padding-top: 10px;
    	}
	}
</style>