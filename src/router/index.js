import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index' // 首页 选择用户对象
import customerIndex from '@/page/personal/customerIndex'//下订单
import Index from '@/page/personal/index'  //订单首页
import sendAddress from '@/page/personal/sendAddress' //发送地址
import arriveAddress from '@/page/personal/arriveAddress' // 到达的地址
import Scanning from '@/page/personal/scanning'// 二维码扫描
import order from '@/page/personal/order'//订单
import ItemInformation from '@/page/personal/ItemInformation'//物品信息
import register from '@/page/personal/register' //登录
import mine from '@/page/personal/mine' //我的
import addAddress from '@/page/personal/addAddress' 
import address from '@/page/personal/address' //添加地址
import Set from '@/page/personal/set' //注册页面
import batchSend from '@/page/personal/batchSend' //批量寄
import Riderindex from '@/page/Rider/riderIndex' //派送员首页
import adminIndex from '@/page/admin/index'//管理员首页
import PageNotFind from '@/page/page-not-find'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },

    //客户开始
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/customerIndex',
      name: 'customerIndex',
      component: customerIndex
    },
    {
      path: '/sendAddress',
      name: 'sendAddress',
      component: sendAddress
    },
    {
      path: '/arriveAddress',
      name: 'arriveAddress',
      component: arriveAddress
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: addAddress
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/ItemInformation',
      name: 'ItemInformation',
      component: ItemInformation
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/Scanning',
      name: 'Scanning',
      component: Scanning,
    },
    {
      path: '/Set',
      name: 'Set',
      component: Set,
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
    },
    {
      path: '/batchSend',
      name: 'batchSend',
      component: batchSend,
    },
    //客户下单结束

    //派送员开始
    {
      path: '/Riderindex',
      name: 'Riderindex',
      component: Riderindex
    },

    //派送员结束

    //管理员开始
    {
      path: '/adminIndex',
      name: 'adminIndex',
      component: adminIndex
    },

    //管理员结束
    {
      path:'*',
      name:'page-not-find',
      component:PageNotFind
    }
  ]
})
