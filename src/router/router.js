import App from '../App'
/**
 * @Author   huyongyong
 * @DateTime 2018-06-05T19:14:44+0800
 */
const home = r => require.ensure([], () => r(require('../page/redirect/home')), 'home'); //重定向
const find = r => require.ensure([], () => r(require('../page/redirect/find')), 'find'); //重定向
const userMessage = r => require.ensure([], () => r(require('../page/redirect/userMessage')), 'userMessage'); //重定向
const userExplorer = r => require.ensure([], () => r(require('../page/redirect/userExplorer')), 'userExplorer'); //重定向

const user = r => require.ensure([], () => r(require('../page/redirect/user')), 'user'); //重定向
const consolejs = r => require.ensure([], () => r(require('../page/redirect/consolejs')), 'consolejs'); //重定向

const activeRoute = r => require.ensure([], () => r(require('../page/redirect/activeRoute')), 'activeRoute'); //动态路由


const parentRoute = r => require.ensure([], () => r(require('../page/redirect/parentRoute')), 'parentRoute'); //父路由
const childOneRoute = r => require.ensure([], () => r(require('../page/redirect/childOneRoute')), 'childOneRoute'); //父路由
const childTwoRoute = r => require.ensure([], () => r(require('../page/redirect/childTwoRoute')), 'childTwoRoute'); //父路由


const cropa = r => require.ensure([], () => r(require('../page/redirect/cropajs')), 'cropa'); //图片裁剪


export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转redirect页面
        {
            path: '',
            redirect: '/home'
            
        },
        //重定向页面
        {
            path: '/home',
            component: home,
            meta:{
                title:'重定向'
            }
        },
        {
            path: '/consolejs',
            component: consolejs,
            meta:{
                title:'console'
            }
        },
        {
            path: '/activeRoute/:id',
            component: activeRoute,
            meta:{
                title:'动态路由'
            }
        },
        {
            path: '/cropa',
            component: cropa,
            meta:{
                title:'图片裁剪'
            }
        },
        {
            path: '/parentRoute',
            component: parentRoute,
            meta:{
                title:'父路由'
            },
            children:[{
                path: '/childOneRoute',
                component: childOneRoute,
                meta:{
                    title:'子路由1'
                }
            },{
                path: '/childTwoRoute',
                component: childTwoRoute,
                meta:{
                    title:'子路由2'
                }
            }]
        },
        {
            path: '/find',
            component: find,
            meta:{
                title:'发现'
            }
        },
        {
            path: '/userMessage',
            component: userMessage,
            meta:{
                title:'用户Message'
            }
        },
        {
            path: '/userExplorer',
            component: userExplorer,
            meta:{
                title:'用户userExplorer'
            }
        },
        {
            path: '/user',
            component: user,
            meta:{
                title:'用户'
            }
        }        
    ]
}]


