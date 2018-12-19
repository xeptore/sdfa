<template lang="pug">
div
    Wrapper
        include result
    
    Breadcrumb(page="result")
</template>

<script src="./Result.js"></script>

<style lang="scss">
@import "../_shared/styles/main.scss";
@import "~please-wait/src/please-wait.scss";
@import "~spinkit/scss/spinners/2-double-bounce.scss";
@import "./styles/style.scss";
</style>
