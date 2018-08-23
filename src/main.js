import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Category from './components/Category';
import Home from './components/Home';

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/top_news', component: Category }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
