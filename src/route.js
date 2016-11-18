module.exports=function(router){
	router.map({
		"*":{
				component:require("./components/home/home")
			},
		'/':{
		      component: require('./components/home/home')
		    },
		    '/resume':{
		      component: require('./components/resume/resume')
		    },
		     '/zuopin':{
		      component: require('./components/zuopin/zuopin')
		    },
		       '/about':{
		      component: require('./components/about/about')
		    },
		       '/zujian':{
		      component: require('./components/zujian/zujian')
		    }


	})

}