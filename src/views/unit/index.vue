<template>
  <el-button-group>
    <el-button @click="addRoute">添加路由</el-button>
    <el-button @click="getRoutes">获取路由信息</el-button>
    <el-button @click="testProxy">测试代理</el-button>
  </el-button-group>
</template>

<script>
import axios from 'axios'
export default {
  name: "Unit",
  methods: {
    addRoute() {
      this.$store.dispatch('route/addRoute',     {
        path: '/secret',
        component: () => import('@/views/secret/index'),
        meta: {
          title: 'SECRET'
        }
      })
    },
    getRoutes() {
      console.log(this.$store.getters.routes)
    },
    testProxy() {
      axios({
        method: 'GET',
        url: 'http://101.200.150.87/api/'
      }).then(
          (res) => console.log(res.data),
          (err) => console.log('error', err.message)
      )
    }
  }
}
</script>

<style scoped>

</style>
