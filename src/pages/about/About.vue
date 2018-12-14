<template lang="pug">
div
    .container-fluid.d-flex.flex-column.align-items-center
        div(dir="rtl").col-10.wrapper.d-flex.flex-column.align-items-center.justify-content-around
            include about

    <Navigator/>
</template>

<script>
import Navigator from '../../shared/templates/navigator/Navigator.vue';

export default {
    name: 'About',
    components: {
        Navigator
    }
}
</script>

<style lang="scss" scoped src="./styles/style.scss"></style>
