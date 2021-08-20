### 1. 引入的包
    1. axios
    2. vue-router
    3. vuex
    4. element-ui
    5. iview

### 2. 项目结构说明
    1. 布局调整layout包中的index.vue
    2. 页面组件位于views中
    3. styles中存放某些样式文件

### 3. axios说明
    发送请求时建议使用api目录下index.js中暴露出的axios实
    例service对象,该对象封装了baseURL.
    发起GET请求时请用params传参,发起POST请求时请用data传参
