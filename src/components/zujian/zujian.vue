<script>
export default{
		data: function(){
			return {
				allzj:{
					"canvas":[
							{"z":"1","name":"漫天圆球随机滚动","link":"./canvas01.html","shuoming":[
								"开发时间：2016-05",
								"开发架构：canvas",
								"开发人员：me"
							]},
							{"z":"2","name":"模仿知乎背景","link":"./canvas02.html","shuoming":[
								"开发时间：2016-04",
								"开发架构：canvas",
								"开发人员：me"
								
							]},
							{"z":"3","name":"canvas时钟","link":"./canvas03.html","shuoming":[
								"开发时间：2015-11",
								"开发架构：canvas",
								"开发人员：me"
								
							]},
							{"z":"4","name":"漫天雪花","link":"./canvas04.html","shuoming":[
								"开发时间：2015-12",
								"开发架构：canvas",
								"开发人员：me"
								
							]},
							{"z":"5","name":"图片撕裂","link":"./smallImg.html","shuoming":[
								"开发时间：2016-10",
								"开发架构：canvas",
								"开发人员：me"
								
							]},
							{"z":"6","name":"小球随进运动","link":"./canvas06.html","shuoming":[
								"开发时间：2016-6",
								"开发架构：canvas",
								"开发人员：me"
							]},
							{"z":"7","name":"烟花效果","link":"./canvas07.html","shuoming":[
								"开发时间：2016-6",
								"开发架构：原生js",
								"开发人员：me"
							]}
					],

				"css3":[
							{"z":"1","name":"各种loading","link":"./css01.html","shuoming":[
								"开发时间：2015-06",
								"开发架构：css3",
								"开发人员：me"
								
							]},
							{"z":"2","name":"旋转图片","link":"./totaoImg.html","shuoming":[
								"开发时间：2015-06",
								"开发架构：css3/js",
								"开发人员：me"
								
							]},
								{"z":"3","name":"放大镜","link":"./css02.html","shuoming":[
								"开发时间：2015-04",
								"开发架构：jqvascript/css",
								"开发人员：me"
								
							]},
							{"z":"4","name":"无缝轮播","link":"./smallImg.html","shuoming":[
								"开发时间：2015-02",
								"开发架构：js/css3",
								"开发人员：me"
								
							]}
						]
				}
			}
		},
		ready: function(){
		
			},
		methods: {
			
		}
	}
</script>

<template>
<div class="container">
     <h2 class="zj_name">个人捣鼓</h2>
		<div  class="zj_list">
			<p>canvas捣鼓</p>
			<ul class="row" style="padding-left: 0">
				<li class="col-md-3 col-sm-6 .col-xs-12" v-for="item in allzj.canvas" >
					<a :href="item.link" class="zj_go" >
						<div class="zj_page">
							<h3>{{item.z}}</h3>
							<p>{{item.name}}</p>
							<p v-for="b in item.shuoming">{{b}}</p>
						</div>
					</a>
				</li>
			</ul>


			<p>CSS3捣鼓</p>
			<ul class="row" style="padding-left: 0">
				<li class="col-md-3 col-sm-6 .col-xs-12" v-for="item in allzj.css3" >
					<a :href="item.link" class="zj_go" >
						<div class="zj_page">
							<h3>{{item.z}}</h3>
							<p>{{item.name}}</p>
							<p v-for="b in item.shuoming">{{b}}</p>
						</div>
					</a>
				</li>
			</ul>

		</div> 
	</div>
</template>
<style type="text/css">
.zj_name{text-align: center;}
.zj_list{text-align: center;}
.zj_list li{text-align: left; margin: 10px 0}

.zj_go{display: block;}
.zj_page{border:1px solid  #E4E4E4; padding: 10px;height:200px; overflow: hidden;}
</style>