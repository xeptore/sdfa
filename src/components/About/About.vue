<template lang="pug">
div
    Wrapper
        include about

    .row.justify-content-center
        button(@click="back" dir="rtl").button.d-flex.align-items-center
            span.buttoon-title برگشت
            i.fas.fa-angle-left.mr-3
</template>

<script src="./About.js"></script>

<style lang="scss">
@import "../_shared/styles/main.scss";
@import "./styles/style.scss";
</style>
