import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/my-component",
    name: "my-component",
    component: () => import("../views/MyComponentView.vue"),
  },
  {
    path: "/binding",
    name: "other",
    component: () => import("../views/OtherView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
