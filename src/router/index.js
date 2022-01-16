import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/",
    component: Layout,
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
  },
  {
    path: "/access*",
    component: Layout,
  }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

export default router;
