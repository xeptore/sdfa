<template lang="pug" src="./breadcrumb.pug"></template>

<script>
export default {
    name: 'Breadcrumb',
    props: {
        page: String
    }
}
</script>

<style lang="scss" scoped>
    @import '../_shared/styles/main.scss';
    @import './breadcrumb.scss';
</style>
