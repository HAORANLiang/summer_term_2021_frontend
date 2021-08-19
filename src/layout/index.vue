<template>
  <el-container class="container-obj">
    <el-aside
        width="60px"
    >
      <Sidebar/>
    </el-aside>
    <el-container>
      <el-header>
        Header
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "@/layout/Sidebar";
export default {
  name: "Layout",
  components: {Sidebar},
}
</script>

<style lang="scss" scoped>
.container-obj{
  height: 100%;
}
.el-aside{
  padding: 0;
  margin: 0;
  /*防止出现底部滚动条*/
  overflow: hidden;
}
.el-header{
  padding-top: 20px;
}
</style>
