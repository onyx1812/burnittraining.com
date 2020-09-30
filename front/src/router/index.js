import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('../views/Quiz.vue'),
  },
  {
    path: '/checkout',
    name: 'сheckout',
    component: () => import('../views/Checkout.vue'),
  },
  {
    path: '/offer-one',
    name: 'Offer One',
    component: () => import('../views/OfferOne.vue'),
  },
  {
    path: '/offer-two',
    name: 'Offer Two',
    component: () => import('../views/OfferTwo.vue'),
  },
  {
    path: '/offer-three',
    name: 'Offer Three',
    component: () => import('../views/OfferThree.vue'),
  },
  {
    path: '/thank-you',
    name: 'thank-you',
    component: () => import('../views/ThankYou.vue'),
  },
  {
    path: '/report',
    name: 'Orders',
    component: () => import('../views/Orders.vue'),
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import('../views/Member.vue'),
  },
  {
    path: '/supplements-female',
    name: 'Supplements Female',
    component: () => import('../views/SupplementsFemale.vue'),
  },
  {
    path: '/supplements-male',
    name: 'Supplements Male',
    component: () => import('../views/SupplementsMale.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue'),
  }, {
    path: '*',
    redirect: '/404'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.afterEach((to, from) => {
  document.getElementById('app').classList = to.name;
})

export default router;
