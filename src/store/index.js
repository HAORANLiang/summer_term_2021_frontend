import Vuex from 'vuex'
import Vue from "vue";
import route from "@/store/modules/route";
import getters from "@/store/getters";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        route,
    },
    getters
})
