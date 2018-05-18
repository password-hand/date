// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Mixins from './mixins/mixins'
import VDistpicker from 'v-distpicker'
// import Icon from 'vue-svg-icon/Icon.vue' //引入

Vue.component('v-distpicker', VDistpicker)
// Vue.component('icon', Icon) //注册
Vue.config.productionTip = false

 

Vue.use(ElementUi);
Vue.mixin(Mixins)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
