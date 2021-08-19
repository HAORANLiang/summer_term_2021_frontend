<template>
  <div>
    <h1>乘法</h1>
    <div>
      <el-input v-model="first"></el-input>
    </div>
    <div>
      <el-input v-model="second"></el-input>
    </div>
    <el-button @click="calculate">确定</el-button>
    <div>
      结果是 {{ answer }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "multiply",
  data() {
    return {
      first: '',
      second: '',
      answer: '',
    }
  },
  methods: {
    calculate() {
      axios({
        method: 'get',
        url: 'http://101.200.150.87/api/multiply',
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