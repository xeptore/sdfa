<template lang="pug" src="./breadcrumb.pug"></template>

<script>
export default {
    name: 'Breadcrumb',
    props: {
        active: String
    }
}
</script>

<style lang="scss" scoped>
    @import '../../styles/main.scss';
    @import './breadcrumb.scss';
</style>
