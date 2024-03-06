import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "canbanView",
    component: () => import("@/views/CanbanView.vue"),
  },
  {
    path: "/user-about/:id",
    name: "userAboutView",
    component: () => import("@/views/UserAboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
