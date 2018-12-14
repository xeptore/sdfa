<template lang="pug">
div
    .container-fluid.d-flex.flex-column.align-items-center
        div(dir="rtl").col-10.wrapper.d-flex.flex-column.align-items-center.justify-content-around
            Home
            //- Form
            //- Result
            //- About
    
    Breadcrumb(v-bind:page="page" v-if="page != 'about'")

    Navigator(v-if="page != 'about'")
</template>

<script>
import Home from './components/Home/Home.vue';
import Form from './components/Form/Form.vue';
import Result from './components/Result/Result.vue';
import About from './components/About/About.vue';

import Breadcrumb from './components/Breadcrumb/Breadcrumb.vue';
import Navigator from './components/Navigator/Navigator.vue';

export default {
    name: 'App',
    components: {
        Home,
        Form,
        Result,
        About,
        Breadcrumb,
        Navigator
    },
    data() {
        return {
            page: 'home'
        }
    }
}
</script>

<style lang="scss">
</style>


<style lang="scss" scoped></style>
