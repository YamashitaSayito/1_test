<template>
	<div id="topFixed">
			<div>
				<a href="javascript:"></a>
				<div class="search">
					<input type="text" placeholder="电脑"/>
					<span></span>
				</div>
			</div>
		</div>
</template>

<script>
	/*吸顶盒效果*/
	import $  from 'jquery'
	export default{
		data(){
			return{
				scrollTop:''
			}
		},
		methods:{
			//吸顶盒
			handleScroll () {
			  this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			  let kill=document.getElementById('seckill').offsetTop;
			  this.scrollTop>kill?$("#topFixed").slideDown(300):$("#topFixed").slideUp(300);
			}
		},
		watch:{
			
		},
		mounted(){
			window.addEventListener('scroll', this.handleScroll)
		}
	}
</script>

<style lang="scss" scoped>
		#topFixed{ 
			position: fixed; 
			top: 0; 
			left: 0; 
			width: 100%; 
			height: 50px; 
			background: #fff; 
			z-index: 500; 
			border-bottom: 2px solid rgb(241,2,20); 
			display: none;
			 
			&>div{ 
				width: 1180px; 
				margin: 0 auto; 
				a{ 
					background: url(../../assets/img/sprite.head.png) no-repeat center center;
					float: left;
					margin-right: 200px; 
					background-position:-194px 0px;
					width: 125px;
					height: 40px;
					margin-top: 5px;
					img{
						 display: block;
						 position: absolute;
   						 left: 0%;
					}
				}
			}
			.search {
				input{
					height: 30px;
					width: 500px;
					background: #eee;
					border: 1px solid #fff;
					padding: 3px 10px;
					float: left;
					margin-top: 6px;
					font-size: 14px;
				}
				span {
					width: 40px;
					height: 36px;
					display: inline-block;
					background: rgb(241, 2, 20) url(../../assets/img/search.png) no-repeat center center;
					background-size: 25px 25px;
					margin-top: 7px;
					margin-left: -1px;
					cursor: pointer;
				}
			}
		}
	
</style>