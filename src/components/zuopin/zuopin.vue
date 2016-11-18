<script>
export default{
		data: function(){
			return {
				allzp:{
					"zpname":[
							{"z":"A","name":"由你购h5版","link":"http://www.yngmall.com/h5/app.html#!/","shuoming":[
								"开发时间：2016-05/2016-06",
								"开发架构：vue.js/es6/webpack/loader",
								"开发人员：3个前端2个后台",
								"负责模块：订单模块、我（个人中心）、地址管理、商品列表/商品详情、登陆/注册等"
							]},
							{"z":"B","name":"由你购pc商城","link":"http://www.yngmall.com","shuoming":[
								"开发时间：2016-04/2016-05",
								"开发架构：jquery",
								"开发人员：3个前端1个后台",
								"负责模块：首页banner、商品列表、商品导航、个人中心、地址管理"
							]},
							{"z":"C","name":"一元夺宝","link":"http://www.yngmall.com","shuoming":[
								"开发时间：2015-10/2015-11",
								"开发架构：angular.js",
								"开发人员：1个前端1个后台",
								"负责模块：全部由我一个人负责曾哥前端，总共有列表、发起夺宝、宝贝详情、支付、夺宝结果等，由于该功能已经结束，不提供链接"
							]},
							{"z":"D","name":"爱施德云商城","link":"http://tlx.yng.com.cn/product.html","shuoming":[
								"开发时间：2015-12/2016-3",
								"开发架构：jquery",
								"开发人员：3个前端1个后台",
								"负责模块：地址管理、订单管理、个人中心、付款选择以及整个商城的后期需求增加和修改"
							]},
							{"z":"E","name":"海尔婴贝","link":"http://www.haierbaby.com/","shuoming":[
								"开发时间：2016-6/2016-7",
								"开发架构：jquery",
								"开发人员：3个前端1个后台",
								"负责模块：首页banner、商品列表、商品导航、个人中心、地址管理"
							]},
							{"z":"F","name":"专题模板开发","link":"http://www.haierbaby.com/zt/20160715/index.html","shuoming":[
								"开发时间：2016-07/2016-07",
								"开发架构：jquery",
								"开发人员：1个前端1个后台",
								"负责模块：动态生成专题模块"
							]}
					],

				"amname":[
							{"z":"G","name":"艾美一族","link":"http://www.amez999.com/","shuoming":[
								"开发时间：2014-12/2015-06",
								"开发架构：jquey/拼图UI",
								"开发人员：2个前端3个后台",
								"负责模块：我（个人中心)模块、首页、配置页."
							]},
								{"z":"H","name":"华资官网","link":"http://chinacapital.net.cn/","shuoming":[
								"开发时间：2016-04/2015-04",
								"开发架构：jquey/bootstrap",
								"开发人员：1个前端0个后台",
								"负责模块：总共才9个页面，没有后台支持，当初需求只是静态页面。"
							]},
							{"z":"I","name":"艾美一族微商城","link":"http://www.amez999.com/m/","shuoming":[
								"开发时间：2015-02/2015-03",
								"开发架构：jquey/拼图UI",
								"开发人员：3个前端3个后台",
								"负责模块：基于微信深度开发的web商城。负责首页banner、个人中心等"
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
	<div id="section_content" class="container">
		<h2 class="zp_title">作品展示</h2>
		<span style="display:block; margin-top:2rem; text-align: center ">由你购作品</span>
		<ul class="row" style="padding-left: 0">
			<li class="col-md-3 col-sm-6 .col-xs-12 list_zp" v-for="item in allzp.zpname">
				<a :href="item.link" >
						<div class="border_box">
							<h2>{{item.z}}</h2>
							<h4>{{item.name}}</h4>
							<p v-for="tm in item.shuoming">{{tm}}</p>
						</div>
				</a>
			
			</li>

		</ul>


		<span style="display:block; margin-top:2rem; text-align: center ">艾美一族作品</span>
		<ul class="row" style="padding-left: 0">
			<li class="col-md-3 col-sm-6 col-xs-12 list_zp" v-for="item in allzp.amname">
				<a :href="item.link" >
						<div class="border_box">
							<h2>{{item.z}}</h2>
							<h4>{{item.name}}</h4>
							<p v-for="tm in item.shuoming">{{tm}}</p>
						</div>
				</a>
			
			</li>

		</ul>

	</div>

</template>
<style type="text/css">
#section_content{ margin-top:1rem }
#section_content>ul{margin-top:1rem }
	.zp_title{text-align:center}
	.list_zp a{cursor: pointer; display: block}
	.border_box{border:1px solid #E4E4E4; padding: 10px;height:280px; overflow: hidden;}
	.list_zp{ margin-top:1rem }

</style>