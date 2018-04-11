<template>
	<div class="rightSide">
		<div class="user">
			<dl>
				<dt><img src="../../assets/img/touxiang.jpg" alt="" /></dt>
			</dl>
			<dd>
				<p>Hi，京东客服</p>
				<p>银牌会员 &nbsp;&nbsp;<span>退出</span></p>
			</dd>
			<div>您可享银牌特惠，开通PLUS</div>
		</div>
		<div class="sales">
			<div class="line">
				<ul class="uli">
					<li @click="changeTab('0')">
						<a href="javascript:" >促销</a>
						<div id="show0">
							<p>【狂欢】跨品类满199减100</p>
							<p>家具建材跨万店买4免1</p>
							<p>【宝贝趴】好货5折，满199</p>
							<p>直击上海时装周边看边买</p>
						</div>
					</li>
					<li style="width=10px;">|</li>
					<li @click="changeTab('1')">
						<a href="javascript:" >公告</a>
						<div style="left: -50px;" id="show1">
							<p>京东携手宝洁：共担社会责任</p>
							<p>京东生鲜即刻赔 告别退货难</p>
							<p>京东推出JD（x）时尚计划</p>
							<p>京东文学奖拉开帷幕</p>
						</div>
					</li>
				</ul>
				<span><a href="javascript:">更多</a></span>
				<div id="redLine"></div>
			</div>
		</div>
		<div class="table">
			<ul>
				<li>
					<a href="javascript:">话费</a>
				</li>
				<li>
					<a href="javascript:">机票</a>
				</li>
				<li>
					<a href="javascript:">酒店</a>
				</li>
				<li>
					<a href="javascript:">游戏</a>
				</li>
				<li>
					<a href="javascript:">企业购</a>
				</li>
				<li>
					<a href="javascript:">加油卡</a>
				</li>
				<li>
					<a href="javascript:">电影票</a>
				</li>
				<li>
					<a href="javascript:">火车票</a>
				</li>
				<li>
					<a href="javascript:">众筹</a>
				</li>
				<li>
					<a href="javascript:">理财</a>
				</li>
				<li>
					<a href="javascript:">礼品卡</a>
				</li>
				<li>
					<a href="javascript:">白条</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			changeTab(tabCon_num){
				
			 for(var i=0;i<2;i++) { 
			 	if(tabCon_num==0){
			 		document.getElementById("redLine").style.left='0px'
			 	}else{
			 		document.getElementById("redLine").style.left='49px'
			 	}
			 	 
			 	document.getElementById("show"+i).style.display="none"; //将所有的层都隐藏 
			 } 
			 document.getElementById("show"+tabCon_num).style.display="block";//显示当前层 
			} 
		}
	}
</script>

<style lang="scss" scoped>
	.rightSide {
		margin-top: 10px;
		background: #fff;
		width: 190px;
		height: 100%;
		float: right;
	    font-size: 12px;
	    margin-left: 10px;
		.user {
			height: 120px;
			border-bottom: 1px solid #efefef;
			padding: 12px 10px;
			box-sizing: border-box;
			dl{
				dt{
					width: 35px;
					height: 35px;
					padding: 5px;
					border: 2px solid rgb(181, 169, 129);
					border-radius: 50%;
					float: left;
					margin-right: 8px;
					img {  
						width: 35px; 
						height: 35px; 
						border-radius: 50%; 
					}
				}
			}
			dd{ 
				margin: 5px 8px;
				p:nth-child(2){ 
					background: url(../../assets/img/pai.png) no-repeat 45px center; 
					background-size: 20px 15px; 
					text-indent: 20px; 
					margin-top: 6px; 
					color: #444; 
				}
			}
			div{ 
				width: 160px; 
				border: 2px solid rgb(216,30,6); 
				padding: 5px; 
				margin-top: 20px; 
				color: rgb(216,30,6); 
				&:hover{ 
					cursor: pointer; 
					background: rgb(216,30,6); 
					color: #fff; 
				}
			}
		}
		/* 信息栏公告 */
		.sales{
			padding: 12px 10px; 
			box-sizing: border-box; 
			height: 150px; 
			border-bottom: 1px solid #eee;
			li{ 
				
				float: left; 
				text-align: center; 
				width: 25px;
				position: relative;
				a{
					color: #000 !important;
				} 
			}
			span{ 
				float: right; 
				a{
					color: #000 !important;
				}
			}
			.line{  
				border-bottom: 1px solid #eee;  
				height: 20px; 
				position: relative; 
				ul{
					
					li{
				
						 
						#show0{ 
							display: block; 
						}
						#show1{ 
							display: none; 
						}
						div{ 
							width: 160px; 
							position: absolute; 
							top:25px;  
							display: none;
							p{ 
								text-align: left; 
								margin-top: 9px; 
								&:hover{  
									cursor: pointer; 
									color: rgb(216,30,6) 
								}
							}
						}
					}
				}
				#redLine{ 
					width: 25px;
					border: 1px solid rgb(216,30,6); 
					position: absolute; 
					bottom: -2px;
				}
			}
		}
		/*table*/
		.table{
			ul{
				
				li {
					width: 25%;
					height: 70px;
					float: left;
					box-sizing: border-box;
					border: 1px solid #eee;
					margin: 0 0 -1px -1px;
					position: relative;
					z-index: 0;
					padding-top: 45px;
					text-align: center;
					a{
						color: #bea68d;
					}
					&:hover a{ color:rgb(216,30,6)  }
				}
				 li:nth-child(4),#main .rightSide .main_user_table li:nth-child(8),#main .rightSide .main_user_table li:nth-child(12){ border-right: none; }
				 li:nth-child(1){ background: url(../../assets/img/phone.png) no-repeat center 10px; background-size: 20px 20px; }
				 li:nth-child(2){ background: url(../../assets/img/fly.png) no-repeat center 10px; background-size: 20px 20px; }
				 li:nth-child(3){ background: url(../../assets/img/hotel.png) no-repeat center 10px; background-size: 20px 20px; }
				 li:nth-child(4){ background: url(../../assets/img/game.png) no-repeat center 10px; background-size: 20px 20px; }
				 li:nth-child(5){ background: url(../../assets/img/company.png) no-repeat center 10px; background-size: 20px 20px; }
				 li:nth-child(6){ background: url(../../assets/img/soil.png) no-repeat center 10px; background-size: 20px 20px; }
				 li:nth-child(7){ background: url(../../assets/img/movie.png) no-repeat center 10px; background-size: 20px 20px; }
				 li:nth-child(8){ background: url(../../assets/img/train.png) no-repeat center 10px; background-size: 20px 20px; }
				 li:nth-child(9){ background: url(../../assets/img/many_person.png) no-repeat center 10px; background-size: 20px 20px; }
				 li:nth-child(10){ background: url(../../assets/img/money.png) no-repeat center 10px; background-size: 20px 20px; }
				 li:nth-child(11){ background: url(../../assets/img/gift.png) no-repeat center 10px; background-size: 20px 20px; }
				 li:nth-child(12){ background: url(../../assets/img/white.png) no-repeat center 10px; background-size: 20px 20px; }
			}
		}
}

</style>