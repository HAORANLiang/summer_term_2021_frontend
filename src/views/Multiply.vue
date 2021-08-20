<template>
  <div>
    <h1>乘法</h1>
    <div>
      <el-input v-model="first"></el-input>
    </div>
    <div>
      <el-input v-model="second"></el-input>
    </div>
    <div>
      <el-button @click="calculate">确定</el-button>
    </div>
    <div>
      结果是 {{ answer }}
    </div>
  </div>
</template>

<script>
import service from "@/api";
export default {
  name: "multiply",
  data () {
    return {
      first: '',
      second: '',
      answer: ''
    }
  },
  methods: {
    calculate() {
      service({
        method: 'get',
        url: '/multiply',
        params: {
          first: this.first,
          second: this.second
        }
      }).then(response => {
        this.answer = response.data.answer
      })
    }
  }
}
</script>

<style scoped>

</style>
