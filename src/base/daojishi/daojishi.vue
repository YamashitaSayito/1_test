<template>
	
	<div class="sk_hd">
				<a class="sk_hd_lk">
					<div class="sk_tit">
						京东秒杀
					</div>
					<div class="sk_subtit">
						FLASH DEALS
					</div>
					<i class="sk_ico"></i>
					<div class="sk_desc">本场距离结束还剩</div>
					<!--倒计时 -->
					<div class="sk_cd" >
						<div class="cd_item" v-for="valu in arr">
							<span class="cd_item_txt hour">{{valu}}</span>
						</div>

					</div>
				</a>
		</div>
</template>

<script>
	import $ from 'jquery'
	export default{
		data(){
			return{
			    arr:[]
			}
		},
		props:{
		      callback : {
		        type : Number,
		        default :''
		      }
		},
		computed:{
			
		},
		mounted(){
			this.arr=this.getTime(this.callback)
		},
		methods:{
			getTime(timer){
				timerd=null
				let timerd = setInterval(()=>{
					let time=new Date()
					let hm=time.getTime()//当前时间毫秒数
					let timec=timer*1000-hm //获取到时间差
					let ms1=timec/1000;/*秒数*/
					
				    let day = Math.floor(timec / 86400000) //计算天数，并取下限值。
			        let hour = Math.abs(Math.floor(ms1 % 86400 / 3600)) //计算小时，并取下限值。
			        let minute = Math.abs(Math.floor(ms1 % 86400 % 3600 / 60 )+1)  //计算分钟，并取下限值。
			        let second = Math.abs(Math.floor(ms1 % 86400 % 3600 % 60))  //计算秒钟，并取下限值. 
					var sss = hour< 10 ? ("0" + hour) : hour
					var smm = minute < 10 ? ("0" + minute) : minute;
					var shh = second< 10 ? ("0" + second) : second 
			        let aa=[]
			        aa.push(sss,smm,shh)
			        this.arr=aa
				  },1000)
			}
				
		}
	}
</script>

<style lang="scss">
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
</style>