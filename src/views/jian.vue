<template>
    <div>
    <input class="input1" v-model="nub1">
    <div>-</div>
    <input class="input2" v-model="nub2">
    <div><button @click="Submit">=</button></div>
    <div>{{this.nub3}}</div>
    </div>
</template>

<script>
    import {postNub} from '../api/api.js'
    export default {
        name: "jian",
        data(){
            return {
                nub1:'',
                nub2:'',
                nub3:'',
            }
        },
        methods: {
            /*loadNub() {
              getAns().then(response => {
                this.nub3 = response.data['answer']
              })
            },*/
            Submit () {
              postNub(this.nub1, this.nub2).then(response => {
                console.log(response)
                this.nub3 = response.data['answer']
              })
            },
        }
    }
</script>

<style scoped>

</style>