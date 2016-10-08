import Vue from 'vue'
import App from './App.vue'
import {fireInit} from './helpers/firebaseHelpers'

fireInit()

new Vue({
  el: 'body',
  render: h => h(App)
})
