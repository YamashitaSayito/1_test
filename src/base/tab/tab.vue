<template>
	<div class="tab">
		<div class="logo">
			<h1>
				<a href="http://www.jd.com" class="logo_tit_lk"></a>
			</h1>
		</div>
		<section id="search">
			<search></search>
			<ul class="searchList">
				<li>
					<a href="javascript:">秒杀</a>
				</li>
				<li>
					<a href="javascript:">优惠券</a>
				</li>
				<li>
					<a href="javascript:">PLUS会员</a>
				</li>
				<li>
					<a href="javascript:">闪购</a>
				</li>
				<li>
					<a href="javascript:">拍卖</a>
				</li>
				<li>
					<a href="javascript:">服装城</a>
				</li>
				<li>
					<a href="javascript:">京东超市</a>
				</li>
				<li>
					<a href="javascript:">生鲜</a>
				</li>
				<li>
					<a href="javascript:">全球购</a>
				</li>
				<li>
					<a href="javascript:">京东金融</a>
				</li>
			</ul>
		
		</section>
		<div class="treasure">
			<a href="#"></a>
		</div>		
	</div>
</template>

<script>
	import Search from 'components/search/search'
	export default{
		components:{
			Search
		}
	}
</script>

<style lang="scss">
.tab{
	position: relative;
	#search{ 
		height: 140px; 
		position: relative; 
		box-sizing: border-box; 
		padding-top: 30px; 
		a:hover{ 
			color: rgb(216,30,6); 
		}
		.searchList{
			position: absolute; 
			bottom:0px; 
			margin-left: 250px;
			li{ 
				float: left; 
				a{ 
					position: relative;
				    display: block;
				    height: 40px;
				    line-height: 40px;
				    font-size: 14px;
				    color: #333;
					margin-right: 30px; 
					&:hover{ 
						color: rgb(216,30,6); 
					}
				}
			}
			
		}
	}
	.treasure{
		position: absolute;
	    right: 0;
	    bottom: 10px;
	    width: 190px;
	    height: 40px;
	    a{
	    	display: block;
		    width: 190px;
		    height: 40px;
		    background: url(//img30.360buyimg.com/da/jfs/t16672/355/808194579/14672/5d5f5868/5aa7c92dNb2bef787.png) center no-repeat;
	    }
	}
	.logo{
		box-shadow: 0 -12px 10px rgba(0,0,0,.2);
		position: absolute;
		top:-30px;
		h1{
			.logo_tit_lk{
				background-position: 0 0;
			    overflow: hidden;
			    display: block;
			    width: 190px;
			    height: 170px;
			    background-image: url(//misc.360buyimg.com/mtd/pc/index_2017/2.0.1/static/images/sprite.head.png);
			    font-size: 0;
			}
		}
	}
}
</style>