import { createApp } from 'vue'
import App from './vue3/App.vue'
import $ from 'jquery';

import BootstrapVue3 from 'bootstrap-vue-3'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app-vue3')

window.$ = $;
