import Vue from 'vue';
import About from './About.vue';

const vm = new Vue({
    el: '#app',
    components: {About},
    template: '<About/>'
});
