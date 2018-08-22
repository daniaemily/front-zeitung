import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Category from './components/Category.vue';
import Home from './components/Home.vue';

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
