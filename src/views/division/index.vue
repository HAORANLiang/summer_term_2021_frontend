<template>
  <div>
    <el-input v-model="first"/>
    <el-input v-model="second"/>
    <el-input v-model="answer" disabled/>
    <el-button @click="handleClick">click</el-button>
  </div>
</template>

<script>
import service from "@/api";
export default {
  name: "index",
  data() {
    return {
      first: 0,
      second: 0,
      answer: 0,
    }
  },
  methods: {
    handleClick() {
      this.answer = this.first / this.second

      service({
        method: 'GET',
        url: '/division',
        params: {
          first: parseInt(this.first),
          second: parseInt(this.second)
        }
      }).then(
          res => this.answer = res.data.answer,
          err => {
            this.$notify.error({
              title: '错误',
              message: err.message
            });
          },
      )
    },
  }
}
</script>

<style scoped>

</style>
