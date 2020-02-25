import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import customerIndex from '@/page/personal/customerIndex'
import sendAddress from '@/page/personal/sendAddress'
import arriveAddress from '@/page/personal/arriveAddress'
import order from '@/page/personal/order'
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
    }
  ]
})
