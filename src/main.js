import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  el: '#app',
}).$mount('#app')
