<script>
import topheader from "./topHeader/topHeader";
	export default{
		data:function(){
			return {
				
			}

		},
		components:{
			topheader
		},
		methods:{},
		ready:function(){
			//alert(this.liujian)
		}

	}
</script>

<template>
<topheader></topheader>
	<router-view></router-view>
</template>