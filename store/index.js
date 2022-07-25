import Vue from "vue";
import Vuex from 'vuex'
import tab from './tab'
import cookie from './cookie'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        tab,
        cookie
    }
})