import Vue from 'vue'
import App from './App.vue'
import useVuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify: useVuetify(null),
  render: h => h(App)
}).$mount('#app')
