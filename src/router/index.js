import Vue from "vue";
import VueRouter from "vue-router";
import NewMessage from "../views/NewMessage.vue";
import History from "../views/History.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "New Message",
    component: NewMessage,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
