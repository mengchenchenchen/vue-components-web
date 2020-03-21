import Vue from "vue";
import Router from "vue-router";
import customerIndex from "@/page/personal/customerIndex"; //下订单
import home from "@/page/personal/home"; //首页
import sendAddress from "@/page/personal/sendAddress"; //发送地址
import arriveAddress from "@/page/personal/arriveAddress"; // 到达的地址
import Scanning from "@/page/personal/scanning"; // 二维码扫描
import order from "@/page/personal/order"; //订单
import ItemInformation from "@/page/personal/ItemInformation"; //物品信息
import login from "@/page/personal/login"; //登录
import mine from "@/page/personal/mine"; //我的
// import distributionDetails from "@/page/personal/distributionDetails";//配送详情页面
import address from "@/page/personal/address"; //添加地址
import register from "@/page/personal/register"; //注册页面
import batchSend from "@/page/personal/batchSend"; //批量寄
import Riderindex from "@/page/Rider/riderIndex"; //派送员首页
import RiderMine from "@/page/Rider/riderMine"; //派送员我的
import AdminIndex from "@/page/admin/index"; //管理员首页
import AdminMine from "@/page/admin/adminMine"; //管理员 我的
import PageNotFind from "@/page/page-not-find";//页面找不到
import McFlexDemo from "@/components/flex/demo";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },

    //客户开始
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/customerIndex",
      name: "customerIndex",
      component: customerIndex
    },
    {
      path: "/sendAddress",
      name: "sendAddress",
      component: sendAddress
    },
    {
      path: "/arriveAddress",
      name: "arriveAddress",
      component: arriveAddress
    },
    // {
    //   path: "/distributionDetails",
    //   name: "distributionDetails",
    //   component: distributionDetails
    // },
    {
      path: "/address",
      name: "address",
      component: address
    },
    {
      path: "/order",
      name: "order",
      component: order
    },
    {
      path: "/ItemInformation",
      name: "ItemInformation",
      component: ItemInformation
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/Scanning",
      name: "Scanning",
      component: Scanning
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/mine",
      name: "mine",
      component: mine
    },
    {
      path: "/batchSend",
      name: "batchSend",
      component: batchSend
    },
    //客户下单结束

    //派送员开始
    {
      path: "/Riderindex",
      name: "Riderindex",
      component: Riderindex
    },
    {
      path: "/RiderMine",
      name: "RiderMine",
      component: RiderMine
    },

    //派送员结束

    //管理员开始
    {
      path: "/AdminIndex",
      name: "AdminIndex",
      component: AdminIndex
    },
    {
      path: "/AdminMine",
      name: "AdminMine",
      component: AdminMine
    },

    {
      path: "/components/flex",
      name: "components-flex",
      component: McFlexDemo
    },
    //管理员结束
    {
      path: "*",
      name: "page-not-find",
      component: PageNotFind
    }
  ]
});

// 全局的导航守卫
// router.beforeEach((to, from, next) => {
//   // 1.登录时，你要把用户的部分信息保存到 local storage
//   // 2. 从 local storage 去取信息，
//   // 3. 发请求，判断用否有权限进入该页面
//   //
//   // 当前用户信息暂存在 local storage
//   // http
//   // console.log(to);
//   // console.log(from);
//   const auth = localStorage.getItem("auth");

//   if (to.path === "/login" || auth === "true") {
//     next();
//     return;
//   }
//   next("/login");
//   // next()
// });

export default router;
