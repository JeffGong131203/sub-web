import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SubConverter",
    component: () => import("../views/Subconverter.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.NODE_ENV === "production" ? "/sub-web" : process.env.BASE_URL,
  routes
});

export default router;
