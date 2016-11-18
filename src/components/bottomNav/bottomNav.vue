<script>
export default{
		data: function(){
			return {
				hidep:true
			}
		},
		ready: function(){
			let that=this;
				function sho(){
					let ww=window.innerWidth|| document.body.innerWidth;
						if(ww>800){
							that.hidep=true;
						}else{
							that.hidep=false;
						}
				};
				sho();
				window.onresize=function(){
					sho();
				}
			},
		methods: {
			
		}
	}
</script>

<template>
<div  class="bot">
	<p v-show="hidep">备案/许可证编号为：粤ICP备16033012号  审核通过日期：2016-04-20</p>
</div> 
	
</template>
<style type="text/css">
	.bot{   position: absolute;
		    bottom:10px;
		    width: 100%;
		    color: #5f6060;
		    line-height: 25px;
		    font-size: 12px;
		    right: 0;
		    text-align: center;
		}
		html,body{position: relative; height: 100%}

</style>