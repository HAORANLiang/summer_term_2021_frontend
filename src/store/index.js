import Vue from 'vue'
import Vuex from 'vuex'
import route from '@/store/modules/route'
import getters from "@/store/getters";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    route,
  },
  getters,
})
