import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
