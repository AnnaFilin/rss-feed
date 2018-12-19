import Vue from 'vue'
import App from './App.vue'
import InstantSearch from 'vue-instantsearch';
import router from './router/index';

Vue.use(InstantSearch);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
