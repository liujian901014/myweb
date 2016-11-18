<script>


	export default{
		data: function(){
			return {
				
			}
		},
		components:{
			
		},
		ready: function(){ 
			var right_dw=document.getElementById("right_dw");
			window.onscroll=function(){
					var t = document.documentElement.scrollTop || document.body.scrollTop; 
					  if(t>200){
					  	right_dw.style.position = "fixed";
					  	right_dw.style.width="25%";
					  
					  }else{
					  	right_dw.style.position = "static";
					  	right_dw.style.width="100%";
					  }
				}
			},
		methods: {
			scrollTopNav:function(i){
				var s=document.getElementById("right_dw")
					
				var chils= s.children; 
					for(let b=0;b<chils.length;b++){
						if(i==b){
							chils[b].setAttribute("class","actionNav")
						}else{
							chils[b].removeAttribute("class","actionNav")
						}
					}
				switch(i){
					case 0:
						document.body.scrollTop=0;
					break;
					case 1:
						var offsetTop=document.getElementById("jiben").offsetTop;
					break;
					case 2:
						var offsetTop=document.getElementById("qiwang").offsetTop;
					break;
					case 3:
						var offsetTop=document.getElementById("xuexi").offsetTop;
					break;
					case 4:
						var offsetTop=document.getElementById("gongzuo").offsetTop;
					break;
					case 5:
						var offsetTop=document.getElementById("jineng").offsetTop;
					break;

					default:
						document.body.scrollTop=0; 
					break;
				}
				document.body.scrollTop=offsetTop;
			}
		}
	}
</script>

<template>
	<section>
	
		<div class="container">
			<div class="row">
				<div class="col-md-9">
					<div class="jianli bg-gray">
						<!-- 头部基本资料 -->
						<div class="heder_top">
								<div class="touxiang">
									<img src="./../../assets/images/touxiang.jpg">
								</div>
								<p class="pname">刘建</p>
								<p class="p_zhiye">web前端开发</p>
								<p class="xuewei"><span class="glyphicon glyphicon-education"></span>
								 本科 ·  青岛科技大学 · 广告学
								</p>
								<p class="tel">
									<span class="glyphicon glyphicon-earphone"></span>
									13420978779
									<span class="glyphicon glyphicon-envelope"></span>
									616824673@qq.com 
								</p>
								<p class="curren_company"><span class="glyphicon glyphicon-map-marker"></span>深圳爱施德股份有限公司</p>
						</div>

						<!-- 基本资料 -->
						<div class="conten_my" id="jiben">
								<div class="title_line">
									<span>基本资料</span>
								</div>

								<div class="content_box jb">
											<dl>
												<dt>基本信息</dt>
												<dd>刘建 男 1990-10-14</dd>
											</dl>
											<dl>
												<dt>工作经验</dt>
												<dd>2年</dd>
											</dl>
											<dl>
												<dt>现 居 地</dt>
												<dd>深圳南山</dd>
											</dl>
											<dl>
												<dt>户籍</dt>
												<dd>湖南沅陵</dd>
											</dl>
								</div>

						</div>
							
							<!-- 期望工作 -->
						<div class="conten_my" id="qiwang">
							<div class="title_line">
								<span>期望工作</span>
							</div>

							<div class="content_box jb">
								<dl>
									<dt>期望工作</dt>
									<dd>前端开发</dd>
								</dl>
								<dl>
									<dt>期望城市</dt>
									<dd>深圳 长沙</dd>
								</dl>
								<dl>
									<dt>期望薪资</dt>
									<dd>9-10k</dd>
								</dl>
								<dl>
									<dt>当前状态</dt>
									<dd>在职</dd>
								</dl>
							</div>

						</div>

									<!-- 学习经历 -->
						<div class="conten_my" id="xuexi">
							<div class="title_line">
								<span>学习经历</span>
							</div>

							<div class="content_box">
								<div class="xuexiao">
									<img src="./../../assets/images/scholl.jpg">
								</div>
								<div class="jianjie">
									<p>青岛科技大学 · 2010.09-2014.06</p>
									<p style="color:gray">本科 · 广告学专业</p>
								</div>
							</div>

						</div>

										<!-- 工作经历 -->
						<div class="conten_my" id="gongzuo">
							<div class="title_line">
								<span>工作经历</span>
							</div>

							<div class="content_box">
								<div class="xuexiao">
									<img src="./../../assets/images/gs.gif">
								</div>
								<div class="jianjie">
									<p>深圳艾美一族电子商务有限公司 </p>
									<p style="color:gray">2014.08-2015.06</p>
								</div>
								<ul class="yuanyin" style="padding-left:0;border-bottom:1px solid #eee ">
									<li>
										<dl>
											<dt>离职原因</dt>
											<dd>本来是我毕业后的第一份工作，我格外的重视，<br/>但是后发现公司的运作模式和管理方式并不适合我，只好选择离开。</dd>
										</dl>
										<dl>
											<dt>工作描述</dt>
											<dd>公司是销售为主，技术人员比较少，任务比较轻，只有常规的专题和活动页面编写，少有大型项目开发。<br/>
											运用技术：HTML+css和jquery<br/>
											ui库 ：拼图ui。
											</dd>
										</dl>
									</li>
								</ul>
							</div>

							<div class="content_box">
								<div class="xuexiao">
									<img src="./../../assets/images/asd.jpg">
								</div>
								<div class="jianjie">
									<p>深圳爱施德股份有限公司 </p>
									<p style="color:gray">2015.06-至今</p>
								</div>
								<ul class="yuanyin" style="padding-left:0;">
									<li>
									<dl>
											<dt>工作描述</dt>
											<dd>上市公司技术团队还是比较牛逼的，分工相对细致<br/>
											负责开发由你购APP项目、<a>手机web版APP</a>、日常专题模板、<a>爱施德云项目</a>、<br/>
											<a>由你购pc商城</a>、微信商城、一元夺宝等<br/>

											主要技术运用:angular,jquery,vue.js,webpack等
											</dd>
										</dl>

									</li>
								</ul>
							</div>

					</div>
						<!-- 学习经历 -->
						<div class="conten_my" id="jineng">
							<div class="title_line">
								<span>技能标签</span>
							</div>

							<div class="content_box jineng">
								<dl>
									<dt>熟悉</dt>
									<dd>
										html+css：可以一个人完成网站PC端、wap端页面的制作；<br/>
										html5+css3:在项目常用html5 api 和css3制作常用动画<br/>
										javascript：熟悉js、jquery能完成页面交互效果的制作，能独立完成页面数据绑定与后续页面操作；<br/>
										vue.js：曾运用vue.js+loader+webpack开发过公司手机商城项目，当前个人网站也是用vue+webpack开发<br/>
										angular.js：曾运用angularjs开发过一元夺宝，微信商城等项目，目前我已选择vue,<br/>
										bootstrap.js：使用这个UI框架开发过<a>华资官网</a><br/>
									</dd>
								</dl>
								<dl>
									<dt>熟练</dt>
									<dd>
										ps:修过图，做过合成，你懂得，设计专业毕业的ps必修<br/>
										ai:同上，一个公司出的软件。用来做矢量图的设计工具<br/>
										less：了解过，没用过，主要是项目中暂时不需要；<br/>
										php/mysql：使用php做过简单的登陆小程序，但是不是我主攻目标<br/>
										
									</dd>
								</dl>
							</div>

						</div>


					
					</div>

				</div>
				<div class="col-md-3">
						<div class="right_box_border">
							<ul id="right_dw">
								<li v-on:click="scrollTopNav(0)" class="actionNav">
									<span class="glyphicon glyphicon-user"></span>
									基本资料
								</li>
								<li v-on:click="scrollTopNav(1)">
									<span class="glyphicon glyphicon-lock"></span>
									期望工作
								</li>
								<li v-on:click="scrollTopNav(2)">
									<span class="glyphicon glyphicon-pencil"></span>
									学习经历
								</li>
								<li v-on:click="scrollTopNav(3)">
									<span class="glyphicon glyphicon-envelope"></span>
									工作经历
								</li>
								<li v-on:click="scrollTopNav(4)">
									<span class="glyphicon glyphicon-tags"></span>
									技能标签
								</li>
							</ul>
						</div>
				</div>
			</div>
		</div>
	</section>
</template>
<style type="text/css">
	body{
		font: 14px "Microsoft YaHei","微软雅黑","Lantinghei SC",Helvetica,Tahoma,Arial,sans-serif,SimSun,"Hiragino Sans GB","Hiragino Sans GB";
	}
	.jianli{ padding:20px 10px }
	.touxiang{width: 100px; height: 100px; margin: 0 auto ; border-radius:50px ;overflow: hidden; background-color:#5ba3f4; padding: 5px }
	.touxiang img{ width: 100%; border-radius:50px;}
	.pname{text-align: center; margin-top:1.2rem; font-size: 28px;color: #333; margin-bottom:4px; }
	.p_zhiye{text-align: center;}
	.xuewei{text-align: center;}
	.tel{text-align: center;}
	.tel span{margin:0 5px ; display: inline-block; }
	.curren_company{text-align: center;}
	.curren_company span{display: inline-block;margin:0 5px ;}


	.conten_my{ position: relative; overflow: hidden;}
	.title_line{position: relative; height: 1px;width: 100%;background: #ededed; margin-top:30px; margin-bottom:30px }
	.title_line span{position: absolute;left: 50%; top: -16px;margin-left: -60px;display: inline-block;font-size: 18px;padding: 3px 24px;
		    text-align: center;
		    background-color: #eee;
		    -moz-border-radius: 26px;
		    -webkit-border-radius: 26px;
		    border-radius: 26px; 
		}
		.title_line span:after{
			content: "";
			display: inline-block;
			width: 20px;
			height: 20px;
			background-color: #fff;
			position: absolute; 
			left:-20px;
			top:5px;
		}
			.title_line span:before{
			content: "";
			display: inline-block;
			width: 20px;
			height: 20px;
			background-color: #fff;
			position: absolute; 
			right:-20px;
			top:5px;
		}
		.content_box dl{width: 50%; float: left; overflow: hidden; }
		.content_box dl dt{width:90px; float: left;  font-weight: 700;}
		.content_box dl dd{float: left;}
		@media screen and (max-width: 768px){
				.jb dl{width: 100%;  overflow: hidden;  text-align: center;}
				.jb dl dt{width:50%; float: left;  font-weight: 700;}
				.jb dl dd{float: left;width: 50%}
		}
		.xuexiao{display: table-cell; width:90px; }
		.xuexiao img{width:50%}
		.jianjie{display: table-cell;vertical-align: middle; }
		.jianjie p{margin: 0}
		.yuanyin dl{display: block; width: 100%; float: none; margin-bottom:10px; margin-top: 10px }
		.jineng dl{ width: 100%; float: none;vertical-align: text-top;}
		.jineng dd{line-height:25px }
		.right_box_border{ padding-top:50px; position:relative; }
		.right_box_border li{line-height:50px; height:50px; font-size:15px;  cursor: pointer;position:relative;  }
		.right_box_border li:after{
			content: "";
			position: absolute;
			left:0;
			top:0;
			height:50px;
			width: 2px;
			background-color: #ededed ;

		}
		.right_box_border li:hover{background-color: rgba(130,130,130,.3);}
		.right_box_border li span{display: inline-block; margin:0 20px }
		ul,li{list-style: none}
		.actionNav{color:#00b88d}
		.right_box_border .actionNav:after{
			background-color: #00b88d ;
		}
</style>