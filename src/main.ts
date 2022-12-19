import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'
import vue3StarRatings from "vue3-star-ratings";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'vue3-carousel/dist/carousel.css'
import '@/scss/main.scss';

createApp(App).use(store).use(router).use(BootstrapVue3).use(vue3StarRatings).mount('#app')
