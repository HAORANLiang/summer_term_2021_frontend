<template>
  <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
  >
    <el-form-item
        label="用户名"
        prop="username"
    >
      <div class="input-container">
        <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
      </div>
    </el-form-item>
    <el-form-item
        label="密码"
        prop="password"
    >
      <div class="input-container">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      <el-button plain @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    let validateUsername = (rule, value, callback) => {
      // console.log('rule', rule)
      // console.log('value', value)
      // console.log('callback', callback)
      if (value < 18) {
        callback(new Error('年龄太小'))
      }
      callback()
    }
    let validatePassword = (rule, value, callback) => {
      // console.log('username', rule, value, callback)
      callback()
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            validator: validateUsername, trigger: 'blur',
          }
        ],
        pass: [
          {
            validator: validatePassword, trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('提交成功', valid)
        } else {
          console.log('提交失败', valid)
        }
        console.log('form', this.ruleForm)
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.input-container {
  width: 30%;
}
</style>
