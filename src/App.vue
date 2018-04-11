<template>
  <div id="app">
  <event></event>
 	<top-list></top-list>
 	<tab></tab>
 	<top-search></top-search>
 	<keep-alive>
 	
    <router-view/>
 	</keep-alive>
  </div>
</template>

<script>
	import TopSearch from 'components/topsearch/topsearch'
	import Tab from 'base/tab/tab'
	import Event from 'base/event/event'
	import TopList from 'base/toplist/toplist'
	export default {
	  name: 'App',
	  components:{
	  	Event,
	  	TopList,
	  	Tab,
	  	TopSearch
	  }
	}
</script>

<style>
html, body, div, span, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	abbr, address, cite, code,
	del, dfn, em, img, ins, kbd, q, samp,
	small, strong, sub, sup, var,
	b, i,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section, summary,
	time, mark, audio, video {
	    margin:0;
	    padding:0;
	    border:0;
	    outline:0;
	    font-size:100%;
	    vertical-align:baseline;
	    background:transparent;
	}
	h1,h2,h3,h4,h5,h6,em,i {
	    font-weight: 100;
	    font-style: normal
	}
	ul,ol,li {
	    list-style-type: none
	}
	a {
		 
	    text-decoration: none;
	    outline: 0
	}
	#app{
		width: 1200px;
		margin: 0 auto;
		
	}
	body{
		overflow-x:hidden;
		background-color: #f0f3ef;
	}
</style>
