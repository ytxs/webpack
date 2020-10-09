// 使用common.js的模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(2,3));
// 使用ES6的模块化的规范
import {name, age, height} from "./js/info"

console.log('name', name, age, height)
// 依赖css文件
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')

// 使用vue进行开发
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'
// const app = new Vue({
//   el: '#app',
//   data: {
//     message: 'hello'
//   }
// })
new Vue({
  el: '#app',
  template:  `<App/>`,
  components: {
    App
  }
})