import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import TopNews from './components/TopNews.vue';
import Home from './components/Home.vue';
import NavBar from './components/NavBar.vue';

Vue.use(VueRouter);
// Vue.component('NavBar', NavBar);

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
