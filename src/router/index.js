import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import customerIndex from '@/page/personal/customerIndex'
import Index from '@/page/personal/index'
import sendAddress from '@/page/personal/sendAddress'
import arriveAddress from '@/page/personal/arriveAddress'
import GoodsInformation from '@/page/personal/goodsInformation'
import Scanning from '@/page/personal/scanning'
import order from '@/page/personal/order'//订单
import register from '@/page/personal/register' //登录
import addAddress from '@/page/personal/addAddress'
import address from '@/page/personal/address'
import businessIndex from '@/page/business/businessIndex'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/customerIndex',
      name: 'customerIndex',
      component: customerIndex
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/businessIndex',
      name: 'businessIndex',
      component: businessIndex
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
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/GoodsInformation',
      name: 'GoodsInformation',
      component: GoodsInformation,
    },
    {
      path: '/Scanning',
      name: 'Scanning',
      component: Scanning,
    },
  ]
})
