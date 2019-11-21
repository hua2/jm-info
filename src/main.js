import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/base.css";
import "./assets/css/utilities.css";
import "./assets/scss/app.scss";

Vue.config.productionTip = false;
Vue.use(require("vue-moment"));

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
