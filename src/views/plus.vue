<template>
  <div class="inputForm">
    <form>
      <input type="text" placeholder="第一个数字" ref="first">
      <input type="text" placeholder="第二个数字" ref="second">
      <button @click="submitForm">提交</button>
      <input type="text" ref="result">
    </form>
  </div>
</template>

<script>
import {postParams} from "../api/api";

export default {
  name: "plus",
  data(){
    return{
    }
  },
  methods:{
    submitForm:function (){
      console.log(this.$refs.first.value)
      console.log(this.$refs.second.value)
      postParams(this.$refs.first.value,this.$refs.second.value).then((res)=>{
        console.log(res.data)
        this.$refs.result.value=res.data
      })
      this.$refs.result.value='test';
      console.log(this.$refs.result)
    }
  },
  mounted() {
    this.$refs.result.value='尚未提交'
  }
}
</script>

<style scoped>
.inputForm{

}

</style>