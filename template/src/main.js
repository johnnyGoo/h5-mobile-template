import Vue from 'vue'
import App from './App.vue'
import WechatShare form 'johnny-wechat-share'
Vue.prototype.WECHAT_SHARE= new WechatShare('http://h5.2smart.cn',{debug:false,api:'http://h5.2smart.cn/wechat/js/'});
new Vue({
  el: '#app',
  render: h => h(App)
})
