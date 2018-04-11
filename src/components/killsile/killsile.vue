<template>
	<div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
		<div class="slide-img">
			<a :href="slides[nowIndex].href">
				<transition name="slide-trans">
					<img v-if="isShow" :src="slides[nowIndex].src">
				</transition>
				<transition name="slide-trans-old">
					<img v-if="!isShow" :src="slides[nowIndex].src">
				</transition>
			</a>
		</div>
		<ul class="slide-pages">
			<li v-for="(item, index) in slides" @click="goto(index)">
				<a class="circle" :class="{on: index === nowIndex}">●</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			slides: {
				type: Array,
				default: []
			},
			inv: {
				type: Number,
				default: 2000
			}
		},
		data() {
			return {
				nowIndex: 0,
				isShow: true
			}
		},
		computed: {
			prevIndex() {
				if(this.nowIndex === 0) {
					return this.slides.length - 1
				} else {
					return this.nowIndex - 1
				}
			},
			nextIndex() {
				if(this.nowIndex === this.slides.length - 1) {
					return 0
				} else {
					return this.nowIndex + 1
				}
			}
		},
		methods: {
			goto(index) {
				this.isShow = false
				setTimeout(() => {
					this.isShow = true
					this.nowIndex = index
				}, 10)
			},
			runInv() {
				this.invId = setInterval(() => {
					this.goto(this.nextIndex)
				}, this.inv)
			},
			clearInv() {
				clearInterval(this.invId)
			}
		},
		mounted() {
			this.runInv();
		}
	}
</script>

<style scoped>
	.slide-show{
		width: 180px;
		height: 260px;
	}
	.slide-trans-enter-active {
		transition: all .5s;
	}
	
	.slide-trans-enter {
		transform: translateX(700px);
	}
	
	.slide-trans-old-leave-active {
		transition: all .5s;
		transform: translateX(-700px);
	}
	
	.slide-show {
		width: 180px;
		margin-top: 10px;
		
		position: relative;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.slide-img {
		height: 260px;
	}
	
	.slide-img img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
	}
	
	.slide-pages {
		position: absolute;
		bottom: 0;
		margin-bottom: 5px;
		left:50%;
		transform: translate(-50%,0);
		
	}
	.slide-pages li {
		display: inline-block;
		padding: 0 5px;
		cursor: pointer;
		color: #c0c0c0;
		font-size: 16px;
	}
	
	.slide-pages li .on {
		color: #e33333;
	}
</style>