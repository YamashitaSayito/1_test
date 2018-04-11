<template>
	<div class="wrap  clearfloat">

			<!-- 左边列表导航 -->
			<div class="leftSide">
				<ul class="leftSideList">
					<li v-for="val in daohang">
						<a href="javascript:">理财</a>/<a href="javascript:">众筹</a>/<a href="javascript:">白条</a>/<a href="javascript:">保险</a>
						<div class="showList">
							<div class="showListLeft">
								<p>
									<a href="javascript:">赛事  &gt;</a>
									<a href="javascript:">运动城  &gt;</a>
									<a href="javascript:">户外馆  &gt;</a>
									<a href="javascript:">健身房  &gt;</a>
									<a href="javascript:">骑行馆  &gt;</a>
									<a href="javascript:">钟表城  &gt;</a>
								</p>
								<div class="listContent">
									<div>
										<a href="javascript:">流行男鞋  &gt;</a>
										<ul>
											<li><i></i><a href="javascript:">合资品牌</a></li>
											<li><i><i>|</i></i><a href="javascript:">国产品牌</a></li>
											<li><i>|</i><a href="javascript:">互联网品牌</a></li>
										</ul>
										<div class="clear"></div>
									</div>
									<div>
										<a href="javascript:">休闲鞋 &gt;</a>
										<ul>
											<li><i>|</i><a href="javascript:">壁挂式空调</a></li>
											<li><i>|</i><a href="javascript:">柜式空调</a></li>
											<li><i>|</i><a href="javascript:">中央空调</a></li>
											<li><i>|</i><a href="javascript:">空调配件</a></li>
										</ul>
										<div class="clear"></div>
									</div>
									<div>
										<a href="javascript:">商务休闲鞋 &gt;</a>
										<ul>
											<li><i>|</i><a href="javascript:">滚筒洗衣机</a></li>
											<li><i>|</i><a href="javascript:">洗烘一体机</a></li>
											<li><i>|</i><a href="javascript:">波轮洗衣机</a></li>
											<li><i>|</i><a href="javascript:">迷你洗衣机</a></li>
											<li><i>|</i><a href="javascript:">洗衣机配件</a></li>
										</ul>
										<div class="clear"></div>
									</div>
									<div>
										<a href="javascript:">正装鞋  &gt;</a>
										<ul>
											<li><i>|</i><a href="javascript:">多门</a></li>
											<li><i>|</i><a href="javascript:">对开门</a></li>
											<li><i>|</i><a href="javascript:">三门</a></li>
											<li><i>|</i><a href="javascript:">双门</a></li>
											<li><i>|</i><a href="javascript:">冷柜/冰吧</a></li>
											<li><i>|</i><a href="javascript:">酒柜</a></li>
											<li><i>|</i><a href="javascript:">冰箱配件</a></li>
										</ul>
										<div class="clear"></div>
									</div>
									<div>
										<a href="javascript:">帆布鞋 &gt;</a>
										<ul>
											<li><i>|</i><a href="javascript:">油烟机</a></li>
											<li><i>|</i><a href="javascript:">燃气灶</a></li>
											<li><i>|</i><a href="javascript:">烟灶套装</a></li>
											<li><i>|</i><a href="javascript:">消毒柜</a></li>
											<li><i>|</i><a href="javascript:">洗碗机</a></li>
											<li><i>|</i><a href="javascript:">电热水器</a></li>
											<li><i>|</i><a href="javascript:">燃气</a></li>
											<li><i>|</i><a href="javascript:">热水器</a></li>
											<li><i>|</i><a href="javascript:">嵌入式厨电</a></li>
										</ul>
										<div class="clear"></div>
									</div>
									<div>
										<a href="javascript:">凉鞋/沙滩鞋  &gt;</a>
										<ul>
											<li><i>|</i><a href="javascript:">电饭煲</a></li>
											<li><i>|</i><a href="javascript:">微波炉</a></li>
											<li><i>|</i><a href="javascript:">电烤箱</a></li>
											<li><i>|</i><a href="javascript:">电磁炉</a></li>
											<li><i>|</i><a href="javascript:">电压力锅</a></li>
											<li><i>|</i><a href="javascript:">豆浆机</a></li>
											<li><i>|</i><a href="javascript:">咖啡机</a></li>
											<li><i>|</i><a href="javascript:">面包机</a></li>
											<li><i>|</i><a href="javascript:">榨汁机</a></li>
											<li><i>|</i><a href="javascript:">料理机</a></li>
											<li><i>|</i><a href="javascript:">电饼铛</a></li>
											<li><i>|</i><a href="javascript:">养生壶/煎药壶</a></li>
											<li><i>|</i><a href="javascript:">酸奶机</a></li>
											<li><i>|</i><a href="javascript:">煮蛋器</a></li>
											<li><i>|</i><a href="javascript:">电水壶/热水瓶</a></li>
											<li><i>|</i><a href="javascript:">电炖锅</a></li>
											<li><i>|</i><a href="javascript:">多用途锅</a></li>
											<li><i>|</i><a href="javascript:">电烧烤炉</a></li>
											<li><i>|</i><a href="javascript:">电热饭盒</a></li>
											<li><i>|</i><a href="javascript:">其它厨房电器</a></li>
										</ul>
										<div class="clear"></div>
									</div>
									<div>
										<a href="javascript:">拖鞋/人字拖  &gt;</a>
										<ul>
											<li><i>|</i><a href="javascript:">电风扇</a></li>
											<li><i>|</i><a href="javascript:">冷风扇</a></li>
											<li><i>|</i><a href="javascript:">吸尘器</a></li>
											<li><i>|</i><a href="javascript:">净化器</a></li>
											<li><i>|</i><a href="javascript:">扫地机器人</a></li>
											<li><i>|</i><a href="javascript:">加湿器</a></li>
											<li><i>|</i><a href="javascript:">挂烫机/熨斗</a></li>
											<li><i>|</i><a href="javascript:">取暖电器</a></li>
											<li><i>|</i><a href="javascript:">插座</a></li>
											<li><i>|</i><a href="javascript:">电话机</a></li>
											<li><i>|</i><a href="javascript:">饮水机</a></li>
											<li><i>|</i><a href="javascript:">净水器</a></li>
											<li><i>|</i><a href="javascript:">除湿机</a></li>
											<li><i>|</i><a href="javascript:">干衣机</a></li>
											<li><i>|</i><a href="javascript:">清洁机</a></li>
											<li><i>|</i><a href="javascript:">收录/音机</a></li>
											<li><i>|</i><a href="javascript:">其它生活电器</a></li>
											<li><i>|</i><a href="javascript:">生活电器配件</a></li>
										</ul>
										<div class="clear"></div>
									</div>
									<div>
										<a href="javascript:">个护健康  &gt;</a>
										<ul>
											<li><i>|</i><a href="javascript:">剃须刀</a></li>
											<li><i>|</i><a href="javascript:">口腔护理</a></li>
											<li><i>|</i><a href="javascript:">电吹风</a></li>
											<li><i>|</i><a href="javascript:">美容器</a></li>
											<li><i>|</i><a href="javascript:">卷/直发器</a></li>
											<li><i>|</i><a href="javascript:">理发器</a></li>
											<li><i>|</i><a href="javascript:">剃/脱毛器</a></li>
											<li><i>|</i><a href="javascript:">足浴盆</a></li>
											<li><i>|</i><a href="javascript:">健康秤/厨房秤</a></li>
											<li><i>|</i><a href="javascript:">按摩器</a></li>
											<li><i>|</i><a href="javascript:">按摩椅</a></li>
											<li><i>|</i><a href="javascript:">其它健康电器</a></li>
										</ul>
										<div class="clear"></div>
									</div>
									<div>
										<a href="javascript:">家庭影音  &gt;</a>
										<ul>
											<li><i>|</i><a href="javascript:">家庭影院</a></li>
											<li><i>|</i><a href="javascript:">迷你音响</a></li>
											<li><i>|</i><a href="javascript:">DVD</a></li>
											<li><i>|</i><a href="javascript:">电视影音配件</a></li>
										</ul>
										<div class="clear"></div>
									</div>
									<div>
										<a href="javascript:">进口电器  &gt;</a>
										<ul>
											<li><i>|</i><a href="javascript:">进口电器</a></li>
										</ul>
										<div class="clear"></div>
									</div>
								</div>
							</div>
							<div class="showListAds">
								<div class="adsTop">
									<ul>
										<li><a href="javascript:"><img src="../../assets/img/hisense.jpg" alt="" /></a></li>
										<li><a href="javascript:"><img src="../../assets/img/joyoung.jpg" alt="" /></a></li>
										<li><a href="javascript:"><img src="../../assets/img/midea.jpg" alt="" /></a></li>
										<li><a href="javascript:"><img src="../../assets/img/philips.jpg" alt="" /></a></li>
										<li><a href="javascript:"><img src="../../assets/img/siemens.jpg" alt="" /></a></li>
										<li><a href="javascript:"><img src="../../assets/img/haier.jpg" alt="" /></a></li>
										<li><a href="javascript:"><img src="../../assets/img/gree.jpg" alt="" /></a></li>
										<li><a href="javascript:"><img src="../../assets/img/gree.jpg" alt="" /></a></li>
									</ul>
								</div>
								<div class="adsBelow">
									<a href="javascript:"><img src="../../assets/img/one_doller.jpg" alt="" /></a>
									<a href="javascript:"><img src="../../assets/img/profit.jpg" alt="" /></a>
								</div>
							</div>
						</div>
					</li>
				
				</ul>	
			
			</div>
			<slide></slide>
			<div class="slideR">
				<div><img src="//img10.360buyimg.com/babel/s190x150_jfs/t19366/286/784639463/47190/3b18a7d0/5aa76845Ncd439f50.jpg!q90!cc_190x150" alt="" /></div>
				<div><img src="//img10.360buyimg.com/babel/s190x150_jfs/t16723/229/800948229/58701/be97529/5aa76824Nf81c4aae.jpg!q90!cc_190x150" alt="" /></div>
				<div><img src="//img1.360buyimg.com/da/s190x150_jfs/t15277/70/2564754495/25599/b4c99ec8/5aa64a5eN771a7df6.jpg!q90!cc_190x150" alt="" /></div>
			</div>
			<userr></userr>
	</div>
</template>

<script>
	import Slide from 'base/slide/slide'
	import Userr from 'components/userr/userr'
	export default{
		components:{
			Slide,
			Userr
		},
		data(){
			return{
				daohang:15
			}
		}
	}
</script>
<style lang="scss" scoped>
	.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0} 
	.clearfloat{zoom:1} 
	.wrap {
		width: 1200px;
		margin: 0px auto;
		.leftSide{
			margin-top: 1px;
			font-size: 14px; 
			color: #fff; 
			background:#fff; 
			width: 190px; 
			height: 100%; 
			float: left; 
			padding: 15px 0; 
			color: #636363;
			box-sizing: border-box; 
			position: relative; 
			.leftSideList>li{ 
				padding-left: 10px; 
				height: 30px; 
				line-height: 30px; 
				&:hover .showList{ 
					display: block; 
				}
				&:hover{ 
					background: #d9d9d9; 
				}
				a{ 
					color: #636363; 
					margin: 0 5px; 
					&:hover{ 
					color: rgb(216, 30, 6);
					}
				}
				.showList {
					width: 1013px;
					height: 480px;
					padding: 10px 15px;
					position: absolute;
					background: rgb(246, 246, 246);
					border: 1px solid #ddd;
					box-shadow: 1px 1px 8px #aaa;
					z-index: 20;
					box-sizing: border-box;
					left: 189px;
					top:0;
					display: none;
					font-size: 12px;
					.showListLeft{ 
						width: 81%; 
						height: 100%; 
						float: left; 
						p a{ 
							padding: 0px 15px; 
							background: #555; 
							color: #fff; 
							margin-right: 10px;
						}
						.listContent{ 
							margin-top: 20px; 
							div{ 
								margin-top: 7px; 
								.clear{ 
									clear: both;
								 }
								 &>a{ 
								 	
								 	text-align: right; 
								 	float: left ; 
								 	background:none; 
								 	color: #555; 
								 	font-weight: bold; 
								 	padding: 0; 
								 	line-height: 25px; 
								 }
								 ul{ 
								 	float: right; 
							
								 	width: 695px; 
								 	li{ 
								 		float: left; 
								 		color: #ddd; 
								 		height: 25px; 
								 		line-height: 25px;
								 		a{ 
								 			margin: 0 10px; 
								 			color: rgb(143,143,143);
								 		}
								 	}
								 }
							}
						}
					}
				}
			}

		}
		.slideR{
			margin-left: 10px;
			width: 190px;
		    float: left;
			div {
				margin-top: 10px;
   				height: 150px;
			}
		}
		.showListAds {
			width: 18%;
			height: 100%;
			float: right;
			padding: 0;
			.adsTop li {
				float: left;
				line-height: 0;
				margin: 1px;
				a{ 
					margin: 0; 
				}
			}
			.adsBelow a{ 
				display: block;
				margin-top: 10px;
				img{
					margin: 2px;
				}  
			}
		}
	}
</style>