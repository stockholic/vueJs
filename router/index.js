import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import BoardRouter from "@/router/board-router.js";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history", //  해시태그(#) 제거
  routes : [
    {path: "/",name: "home",component: Home},
     ...BoardRouter
  ]
})
