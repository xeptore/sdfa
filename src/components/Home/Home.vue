<template lang="pug">
div.tingle-content-wrapper
    Wrapper
        include home
    
    Breadcrumb(page="home")
</template>

<script src="./Home.js"></script>

<style lang="scss">
@import "../_shared/styles/main.scss";
@import "~tingle.js/src/tingle.css";
@import "./styles/style.scss";
@import "./styles/modal.scss";
</style>
