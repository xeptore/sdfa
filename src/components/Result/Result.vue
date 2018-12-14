<template lang="pug">
div
    Wrapper
        include result
    
    Breadcrumb(page="result")

    Navigator
</template>

<script src="./Result.js"></script>

<style lang="scss" scoped>
    @import '../_shared/styles/main.scss';
    @import './styles/style.scss';
</style>
