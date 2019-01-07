import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import router from "./routers";
import store from "./store";
import iView from "iview";
import "iview/dist/styles/iview.css";
import AMap from "vue-amap";

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: "5455c45c0f8edec64518052faa154c56",
  // 插件集合 （插件按需引入）
  plugin: ["AMap.Geolocation"]
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
