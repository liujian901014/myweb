<script>
export default{
		data: function(){
			return {
				nav:[
						{id:0,name:"首页",isAction:true,link:"/home"},
						{id:1,name:"简历",isAction:false,link:"/resume"},
						{id:2,name:"捣鼓",isAction:false,link:"/zujian"},
						{id:3,name:"作品",isAction:false,link:"/zuopin"},
						{id:4,name:"博客",isAction:false,link:"http://www.jianshu.com/users/65da38c5de07/timeline"}
					],
					isshowNav:true,
					isshowLI:false
				
			}
		},
		ready: function(){
			let that=this;
				function sho(){
					let ww=window.innerWidth|| document.body.innerWidth;
						if(ww>800){
							that.isshowNav=true;
						}else{
							that.isshowNav=false;
						}
				};
				sho();
				window.onresize=function(){

					sho();
				}
			
			},
		methods: {
				gonav:function(v){
					this.isshowLI=false;
						let reg=/^\//;
						if(reg.test(v)){
							this.$router.replace({
                                     path:v
                             })
						}else{
							window.location.href=v
						}
				},
			showli:function(){
				if(this.isshowLI){
						this.isshowLI=false;
				}else{
					this.isshowLI=true;
				}
				
			}

		}
	}
</script>

<template>
	<div id="header" v-show="isshowNav">
		<div class="container clearfix ">
			<a v-link="{path:'/home'}"  class="pull-left c-blue logo">
				<img src="./../../assets/images/logo.png">
			</a>
			<ul class="nav navbar-nav">
				<li v-for="item in nav" v-on:click="gonav(item.link)"><a href="javascript:;">{{item.name}}</a></li>
			</ul>
			<a v-link="{path:'/about'}"  class="aboutme btn-success">关于本站</a>
		</div>
	</div>

	<div class="phoneshow" v-show="!isshowNav">
		<div class="bgnav">
			<a><img src="./../../assets/images/logo.png"></a>
			<span v-on:click="showli()" class="glyphicon glyphicon-align-justify rightBTN"></span>
			<ul class="dropdown-menu22"  v-show="isshowLI">
			<li v-for="item in nav" v-on:click="gonav(item.link)"><a href="javascript:;">{{item.name}}</a></li>
		</ul>
		</div>
	</div>
	
</template>
<style type="text/css">
	#header{  }
	.logo{height:50px;padding: 2px 10px}
	.logo img{height: 90%;}
	.aboutme{float: right;height: 100px; height: 50px; padding: 0px 10px; line-height: 50px }
	.bgnav{background-color:#fff; padding: 2px 10px; position: relative; height: 50px;vertical-align: middle;}
	.bgnav>a{float: left; display: inline-block; height: 100%}
	.bgnav a img{height:90%; padding-top:8px}
	.rightBTN{display: inline-block; float: right; font-size:25px; padding-top:10px;  height: 100%; vertical-align: middle; color:rgba(130,130,130,.8);}
	.bgnav ul{position: absolute; right: 0; top:50px;}
	.bgnav ul li{display: block;text-align: center; line-height:2rem; padding: 5px 0 }
	.bgnav ul li a{display: block;}
	.dropdown-menu22{

    top: 100%;
    z-index: 1000;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
	}
</style>