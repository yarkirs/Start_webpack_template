import 'bootstrap/scss/bootstrap.scss';
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js';

// JS
// import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('App', require('./components/App.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})