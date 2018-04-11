<template>
	<div class="searchBar">
		<input type="text" placeholder="手表" />
		<div></div>
		<div class="shoppingCar">
			<a href="javascript:">我的购物车<span>0</span></a>
			<div class="showCar">
				购物车中还没有商品，赶紧选购吧！
			</div>
		</div>
		<p>
			<a href="javascript:">玩物盛典</a>
			<a href="javascript:">立省3000</a>
			<a href="javascript:">申慧兽药</a>
			<a href="javascript:">眼镜节</a>
			<a href="javascript:">家电秒杀</a>
			<a href="javascript:">休闲零食</a>
			<a href="javascript:">夹克男秋款</a>
			<a href="javascript:">满199减100</a>
		</p>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.searchBar {
		margin-left: 325px;
		input {
			padding: 4px 44px 4px 4px;
			width: 450px;
    		height: 25px;
			line-height: 20px;
			margin-right: 0;
			float: left;
			border: 1px solid transparent;
			font-size: 14px;
			outline: none;
		}
		input+div {
			line-height: 35px;
			width: 50px;
    		height: 35px;
			float: left;
			background: red url(../../assets/img/search.png) no-repeat center center;
			background-size: 25px 25px;
			cursor: pointer;
			background-color: #f10215;
		}
		.shoppingCar {
			&:hover a{ 
				border-bottom:1px solid #fff; 
			}
			&:hover .showCar{
				display: block;
			
			}
			position: relative;
			display: inline-block;
			margin-left: 30px;
			z-index: 10;
			a {
				display: block;
				z-index: 10;
				width: 100px;
				height: 35px;
				border: 1px solid #ddd;
				line-height: 30px;
				background: #fff url(../../assets/img/shopping_car.png) no-repeat 40px center;
				background-size: 16px 16px;
				padding-left: 70px;
				font-size: 14px;
				color: rgb(216, 30, 6);
				position: relative;
				span {
					width: 15px;
					height: 15px;
					line-height: 15px;
					text-align: center;
					color: #fff;
					border-radius: 50%;
					display: inline-block;
					background: rgb(216, 30, 6);
					position: absolute;
				}
			}
			.showCar {
			    padding: 10px 0;
			    text-align: center;
			    line-height: 49px;
			    overflow: hidden;
			    color: #999;
				width: 200px;
				background: #fff url(../../assets/img/empty_shopping_car.png) no-repeat 40px center;
				background-size: 40px 40px;
				padding-left: 80px;
    			padding-right: 20px;
				font-size: 12px;
				border: 1px solid red;
				position: absolute;
				top: 35px;
				right: 0px;
				display: none;
				border: 1px solid #ddd;
			}
		}
		p{
			margin-top: 8px;
			a{
				padding-right: 5px;
				color: #999;
			    width: 65px;
			    white-space: nowrap;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    font-size: 12px;
			}
			a:first-child{
				color: #f10215;
			}
		}
		
	}
</style>