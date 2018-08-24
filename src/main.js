import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import TopNews from './components/TopNews';
import Home from './components/Home';

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { name: 'Top News', path: '/', component: TopNews }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
