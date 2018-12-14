<template lang="pug">
div
    .container-fluid.d-flex.flex-column.align-items-center
        div(dir="rtl").col-10.wrapper.d-flex.flex-column.align-items-center.justify-content-around
            include form

    <Breadcrumb active="form"/>

    <Navigator/>
</template>

<script>
import Breadcrumb from '../../shared/templates/breadcrumb/Breadcrumb.vue';
import Navigator from '../../shared/templates/navigator/Navigator.vue';

export default {
    name: 'Form',
    components: {
        Breadcrumb,
        Navigator
    }
}
</script>

<style lang="scss" scoped src="./styles/style.scss"></style>
