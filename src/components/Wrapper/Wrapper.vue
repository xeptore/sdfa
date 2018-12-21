<template lang="pug">
.container-fluid.d-flex.flex-column.align-items-center.justify-content-around.mb-1
    div(dir="rtl").col-11.wrapper.d-flex.flex-column.align-items-center.justify-content-around
        slot
</template>

<script src="./wrapper.js"></script>

<style lang="scss">
.wrapper {
  overflow: hidden;
}
</style>

