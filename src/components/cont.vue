<template>
  <div>
   <dao-hang></dao-hang>
   <sec-kill></sec-kill> 
	  <keep-alive>
	  	 <cont-list></cont-list>
	  </keep-alive>

	  
  </div>
</template>

<script>

	import ContList from 'base/contlist/contlist'
	import SecKill from 'components/seckill/seckill'
	import DaoHang from 'components/daohang/daohang'
export default {
  components:{
  	DaoHang,
  	SecKill,
  	ContList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
</style>
