import './components/_shared/styles/main.scss';
import Vue from 'vue';
import App from './App.vue';

const vm = new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
});
