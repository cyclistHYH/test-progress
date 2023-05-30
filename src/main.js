import Vue from 'vue'
import App from './App.vue'
import { Progress, Slider } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(Progress)
Vue.use(Slider)

new Vue({
  render: h => h(App),
}).$mount('#app')
