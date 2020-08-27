import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [{
			path: '/',
			redirect: '/dashboard'
		},
		{
			path: '/',
			component: resolve => require(['../components/common/HomeTest.vue'], resolve),
			meta: {
				title: '自述文件'
			},
			children: [{
					path: '/dashboard',
					component: resolve => require(['../components/page/Dashboard.vue'], resolve),
					meta: {
						title: '系统首页哈哈'
					}
				},
				{
					path: '/icon',
					component: resolve => require(['../components/page/Icon.vue'], resolve),
					meta: {
						title: '自定义图标'
					}
				},
				{
					path: '/tabs',
					component: resolve => require(['../components/page/Tabs.vue'], resolve),
					meta: {
						title: 'tab选项卡'
					}
				},
				{
					// 富文本编辑器组件
					path: '/editor',
					component: resolve => require(['../components/page/VueEditor.vue'], resolve),
					meta: {
						title: '富文本编辑器'
					}
				},
				{
					// markdown组件
					path: '/markdown',
					component: resolve => require(['../components/page/Markdown.vue'], resolve),
					meta: {
						title: 'markdown编辑器'
					}
				},
				{
					// vue-schart组件
					path: '/charts',
					component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
					meta: {
						title: 'schart图表'
					}
				}
			]
		},
		{
			path: '/login',
			component: resolve => require(['../components/page/Login.vue'], resolve)
		},
		{
			path: '*',
			redirect: '/404'
		}
	]
})
