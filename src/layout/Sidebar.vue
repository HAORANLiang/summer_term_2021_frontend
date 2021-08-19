<template>
  <el-menu
      :collapse="true"
      mode="vertical"
  >
<!--    <router-link to="/home">-->
<!--      <el-menu-item index="2" @click="handleClick">-->
<!--        <i class="el-icon-menu"></i>-->
<!--        <span slot="title">Home</span>-->
<!--      </el-menu-item>-->
<!--    </router-link>-->
    <router-link
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
    >
      <el-menu-item :index="route.path">
        <span slot="title">{{route.meta.title}}</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isCollapse: true
    };
  },
  computed: {
    routes() {
      return this.$store.getters.routes
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
}
</script>

<style scoped>
.el-menu{
  height: 100%;
  width: 100%;
  background-color: #2B2B2B;
}

</style>
