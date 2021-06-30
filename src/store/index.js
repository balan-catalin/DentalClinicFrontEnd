import Vue from 'vue';
import Vuex from 'vuex';

import allergy from './allergy.module'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        allergy
    }
});
