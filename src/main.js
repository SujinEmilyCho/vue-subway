import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

const router = new VueRouter({});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
