import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: 'fr',
    q: 1,
    gender: null,
    age: null,
    type: 'imperial',
    height: null,
    weigh: null,
    active: null,
    describes: null,
    progress: 0,
    q6: 'q6_1',
    amount: 0,
    first_name: null,
    last_name: null,
    email: null,
    phone: null,
    card_number: null,
    card_date: null,
    card_code: null,
    guarantee: false,
    subscribe: true,
    step_two: true,
    step_three: false,
    step_for: false,
    order_id: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
