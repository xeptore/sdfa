<template lang="pug">
div
    Wrapper
        include home
    
    Breadcrumb(page="home")

    Navigator
</template>

<script src="./Home.js"></script>

<style lang="scss" scoped>
    @import '../_shared/styles/main.scss';
    @import './styles/style.scss';
</style>
