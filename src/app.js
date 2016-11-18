var Vue = require('vue');

var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
var routerMap = require('./route');

import app from './components/app';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.debug = false;
Vue.config.devtools = false;

var router = new VueRouter({});
routerMap(router);
router.start(app,'app');
