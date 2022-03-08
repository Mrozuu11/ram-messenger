import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Select, Option } from "element-ui";
import "@/styles/index.scss"; // global css

Vue.config.productionTip = false;
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
