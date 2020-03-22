import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
