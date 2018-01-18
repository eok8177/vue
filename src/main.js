import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import Lpzs from './components/lpzs.vue'
import NewLpz from './components/new-lpz.vue'

Vue.use(VueRouter);

const routes = [
  { path: '', component: Lpzs},
  { path: '/new-lpz', component: NewLpz }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
