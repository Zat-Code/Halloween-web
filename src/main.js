import Vue from 'vue'
import App from './App.vue'
import shell from 'vue-shell'

Vue.use(shell);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
