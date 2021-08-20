<template>
  <el-button-group>
    <el-button @click="addRoute">添加路由</el-button>
    <el-button @click="getRoutes">获取路由信息</el-button>
    <el-button @click="testProxy">测试代理</el-button>
    <el-button @click="testJson">测试JSON</el-button>
  </el-button-group>
</template>

<script>
import service from "@/api";
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
      service({
        method: 'GET',
        url: '/'
      }).then(
          (res) => console.log(res.data),
          (err) => console.log('error', err.message)
      )
    },
    testJson() {
      service({
        method: 'POST',
        url: '/testdemo',
        data: {
          name: 'xim',
          age: 12
        }
      }).then(
          res => console.log(res.data.name),
          err => console.log(err)
      )
    }
  }
}
</script>

<style scoped>

</style>
