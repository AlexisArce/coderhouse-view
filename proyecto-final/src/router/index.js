import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/login/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/register/index.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../components/cart/index.vue"),
  },
  {
    path: "/products/:id",
    name: "ItemDetails",
    component: () => import("../components/item-details/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
