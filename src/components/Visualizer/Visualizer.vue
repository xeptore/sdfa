<template lang="pug">
div
    Wrapper
        .diagram-container#diagram.d-flex.justify-content-center.align-items-center.w-100.h-100

    .row.justify-content-center
        button(@click="back" dir="rtl").button.d-flex.align-items-center
            span.buttoon-title برگشت
            i.fas.fa-angle-left.mr-3
    
</template>

<script src="./visualizer.js"></script>

<style lang="scss">
@import "../_shared/styles/main.scss";
@import "./onerror.scss";
</style>
