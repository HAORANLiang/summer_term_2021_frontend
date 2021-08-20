import Vue from 'vue'
import Vuex from 'vuex'
import route from '@/store/modules/route'
import getters from "@/store/getters";
Vue.use(Vuex)

// 要添加配置请在modules中新建文件并导入

export default new Vuex.Store({
  modules: {
    route,
  },
  getters,
})
