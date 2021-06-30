import Vue from 'vue';
import VueRouter  from 'vue-router';
//import HelloWorld from '../components/HelloWorld';
import Allergy from '../pages/allergies/Allergies';
import Home from '../views/Home';

Vue.use(VueRouter);

export const router = new VueRouter ({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/allergies', component: Allergy },
    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    next();
  })