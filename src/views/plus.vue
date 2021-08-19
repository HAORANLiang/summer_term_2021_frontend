<template>
  <div class="inputForm">
    <form>
      <input type="text" placeholder="第一个数字" ref="first">
      <input type="text" placeholder="第二个数字" ref="second">
      <button @click="submitForm">提交</button>
      <input type="text" ref="answer">
    </form>
  </div>
</template>

<script>
import {postParams} from "../api/api";
import axios from "axios";

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
      // postParams(this.$refs.first.value,this.$refs.second.value).then((res)=>{
      //   console.log(res.data)
      //   this.$refs.result.value=res.data
      // })
      axios({
        method:'get',
        url:'http://101.200.150.87/plus',
        params:{
          first:this.$refs.first,
          second:this.$refs.second
        }
      }).then(response =>{
        this.$refs.answer=response.data.answer
      })
      // this.$refs.result.value='test';
      console.log(this.$refs.answer.value)
    }
  },
  mounted() {
    this.$refs.answer.value='尚未提交'
  }
}
</script>

<style scoped>
.inputForm{

}

</style>