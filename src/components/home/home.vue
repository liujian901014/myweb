<script>
import bottomnav from "./../bottomNav/bottomNav";
	export default{
		data: function(){
			return {
				
			}
		},
		components:{
			bottomnav
		},
		ready: function(){
			this.getname();
			},
		methods: {
			getname:function(){
				this.$http.get("./liujian.txt").then(function(d){
					console.log(d)
				})
			}

			
		}
	}
</script>

<template>
	
	<div class="middem_box container">
		<h1>I AM A WEB CODER</h1>
		<p style="margin-bottom:0px; margin-top:10px  ">you can contact me by 616824673@qq.com</p>
		<p style="margin-bottom:0px ">||</p>
		<p >tell me by 13420978779</p>
		<div class="margin-top row" >
			<div class="col-md-3 col sm-6 col-xs-6  margin-small-top">
				<div class="imgtitle" v-link="{path:'/resume'}">
					<a href="" style="overflow: hidden; display: block"><img class="rotatoImg" src="./../../assets/images/index-icon1_a5761d5.png"></a>
					<p class="psct">
						<a  style="font-weight: 100;font-size: 21px; color:#5f6060; letter-spacing: 2px;text-decoration: none;">个人简历</a>
					</p>
				</div>
			</div>

			<div class="col-md-3 col sm-6 col-xs-6  margin-small-top">
				<div class="imgtitle" v-link="{path:'/zujian'}">
					<a  href="javascript:; " style="overflow: hidden; display: block"><img class="rotatoImg" src="./../../assets/images/ui-gif-Animation-uisheji.gif"></a>
					<p class="psct">
						<a  href="javascript:;"  style="font-weight: 100;font-size: 21px; color:#5f6060; letter-spacing: 2px;text-decoration: none;">前端捣鼓</a>
					</p>
				</div>
			</div>

			<div class="col-md-3 col sm-6 col-xs-6  margin-small-top">
				<div class="imgtitle" v-link="{path:'/zuopin'}">
					<a href="javascript:;" style="overflow: hidden; display: block" ><img class="rotatoImg" src="./../../assets/images/20141223160255_eNtBQ.gif"></a>
					<p class="psct">
						<a  href="javascript:;" style="font-weight: 100;font-size: 21px; color:#5f6060; letter-spacing: 2px;text-decoration: none;">个人作品</a>
					</p>
				</div>
			</div>

			<div class="col-md-3 col sm-6 col-xs-6 margin-small-top">
				<div class="imgtitle">
					<a target="_blank" style="overflow: hidden; display: block" href="http://www.jianshu.com/users/65da38c5de07/timeline"><img class="rotatoImg" src="./../../assets/images/index-icon4.gif"></a>
					<p class="psct">
						<a href="http://www.jianshu.com/users/65da38c5de07/timeline" target="_blank" style="font-weight: 100;font-size: 21px; color:#5f6060; letter-spacing: 2px;text-decoration: none;">个人博客</a>
					</p>
				</div>
			</div>


		</div>
	</div>
	<bottomnav></bottomnav>
</template>
<style type="text/css">
	.middem_box{ text-align: center;font-family:cursive; margin-top:50px }
	.middem_box h1{text-align:center; margin: 0 auto; color:#337ab7; font-size:4rem }
	.middem_box .youxing{ line-height:4rem }
	.imgtitle{text-align: center;}
	.imgtitle img{width:130px; height: 130px}
	.psct{ margin-top:1.2rem}
	.margin-top{ margin-top:50px }
.rotatoImg{transition:  transform 1s;-webkit-transition:-webkit-transform 1s;}
.rotatoImg:hover{-webkit-transform:scale(1.3,1.3);-moz-transform:scale(1.3,1.3);transform:scale(1.3,1.3)}
.margin-small-top{margin-top:20px }





</style>
