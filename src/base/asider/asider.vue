<template>
	<div class="aside">
		<div class="aside_wrap">
			<div class="jdm-toolbar">
				<div class="jdm-toolbar-tabs">
					<div class="jdm-toolbar-tab">
						<i class="tab-tip tab-tip_1"></i>
						<i class="tab-ico tab_ico_1"></i>
						<em class="tab-text">京东会员 </em>
					</div>
					<div class="jdm-toolbar-tab">
						<i class="tab-ico tab_ico_2"></i>
						<em class="tab-text">购物车 </em>
					</div>
					<div class="jdm-toolbar-tab">
						<i class="tab-ico tab_ico_3"></i>
						<em class="tab-text">我的关注 </em>
					</div>
					<div class="jdm-toolbar-tab">
						<i class="tab-ico tab_ico_4"></i>
						<em class="tab-text">我的足迹 </em>
					</div>
					<div class="jdm-toolbar-tab">
						<i class="tab-ico tab_ico_5"></i>
						<em class="tab-text">我的消息 </em>
					</div>
					<div class="jdm-toolbar-tab">
						<i class="tab-ico tab_ico_6"></i>
						<em class="tab-text">咨询JIMI </em>
					</div>
				</div>
				<div class="jdm-toolbar-footer">
					<div class="jdm-toolbar-tab">
						<a href="#">                     
							<i class="tab-ico tab_ico_7" ></i>                                 
							<em class="tab-text">顶部</em>                          
						</a>
					</div>
					<div class="jdm-toolbar-tab">
						<a href="#">                     
							<i class="tab-ico tab_ico_8" ></i>                                 
							<em class="tab-text">反馈</em>                          
						</a>
					</div>
				</div>
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
			  this.scrollTop>kill?$(".aside").slideDown(300):$(".aside").slideUp(300);
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
	.aside{
		display: none;
		.aside_wrap{
		    position: fixed;
		    border-right: 6px solid #7a6e6e;
		    top: 0;
		    right: 0;
		    z-index: 9990;
		    width: 10px;
		    height: 100%;
		    .jdm-toolbar {
			    position: absolute;
			    right:-6px;
			    top: 0;
			    width: 0;
			    height: 100%;
			    border-right: 6px solid #7a6e6e;
			    -webkit-transition: right .3s ease-in-out 0s;
			    transition: right .3s ease-in-out 0s;
			    .jdm-toolbar-tabs {
				    position: absolute;
				    top: 50%;
				    left: -29px;
				    width: 35px;
				    margin-top: -61px;
				    .jdm-toolbar-tab {
				    	&:hover .tab-text{
				    		font-size: 12px;
						    left: -60px;
						    background-color: #c81623;
						}
						&:hover .tab-ico{
							border-radius: 3px 0 0 3px;
							background-color: #c81623;
						}
						&:hover .tab-tip{
							display: none;
						}
					    position: relative;
					    width: 35px;
					    height: 35px;
					    margin-bottom: 1px;
					    cursor: pointer;
					    background-color: #7a6e6e;
					    border-radius: 3px 0 0 3px;
					    .tab-tip {
						    position: absolute;
						    top: 8px;
						    right: 10px;
						    width: 6px;
						    height: 6px;
						    background:#E33333;
						    border-radius: 50%;
						    z-index: 999;
						}
						.tab-tip_1{
							background-position: -150px -150px;
						}
						.tab-ico {
						    width: 34px;
						    height: 35px;
						    margin-left: 1px;
						    position: relative;
						    z-index: 2;
						    background-color: #7a6e6e;
						    display: inline-block;
   							background: url(../../assets/img/aside.png) no-repeat;
						}
						.tab_ico_1{
							background-position: -88px -175px;
						}
						.tab_ico_2{
							background-position: -50px 0;
						}
						.tab_ico_3{
							background-position:-50px -50px;
						}
						.tab_ico_4{
							background-position:-50px -100px;
						}
						.tab_ico_5{
							background-position:-190px -150px;
						}
						.tab_ico_6{
							background-position:-50px -150px;
						}
						.tab-text {
							font-size: 12px;
						    width: 62px;
						    height: 35px;
						    line-height: 35px;
						    color: #fff;
						    text-align: center;
						    font-family: 微软雅黑;
						    position: absolute;
						    z-index: 1;
						    left: 35px;
						    top: 0;
						    background-color: #7a6e6e;
						    border-radius: 3px 0 0 3px;
						    transition: left .3s ease-in-out .1s;
						}
						
					}
				}
				.jdm-toolbar-footer {
				    position: absolute;
				    bottom: -1px;
				    width: 100%;
				    left: -29px;
				    .jdm-toolbar-tab {
				    	&:hover .tab-text{
				    		font-size: 12px;
						    left: -60px;
						    background-color: #c81623;
						}
						&:hover .tab-ico{
							background-color: #c81623;
						}
						z-index:100;
					    position: relative;
					    width: 35px;
					    height: 35px;
					    margin-bottom: 1px;
					    cursor: pointer;
					    background-color: #7a6e6e;
					    border-radius: 3px 0 0 3px;
					    
					    a{
					    	.tab-ico {
							    width: 34px;
							    height: 35px;
							    margin-left: 1px;
							    position: relative;
							    z-index: 2;
							    background-color: #7a6e6e;
							    display: inline-block;
    							background: url(../../assets/img/aside.png) no-repeat;
							}
							.tab_ico_7{
								background-position: -50px -250px;
							}
							.tab_ico_8{
								background-position: -50px -300px;
							}
							.tab-text {
								font-size: 12px;
							    width: 62px;
							    height: 35px;
							    line-height: 35px;
							    color: #fff;
							    text-align: center;
							    font-family: 微软雅黑;
							    position: absolute;
							    z-index: 1;
							    left: 35px;
							    top: 0;
							    background-color: #7a6e6e;
							    border-radius: 3px 0 0 3px;
							    -webkit-transition: left .3s ease-in-out .1s;
							    transition: left .3s ease-in-out .1s;
							}
					    }
					}
				}
			}

		}
	}
</style>