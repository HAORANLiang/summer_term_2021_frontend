<template>
  <Layout/>
</template>
<script>
import Layout from "@/layout";
export default {
  components: {Layout},
  mounted() {
    console.log(this.$router)
  }
}
</script>
