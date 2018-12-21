<template lang="pug">
.container-fluid.d-flex.flex-column.align-items-center.justify-content-around.pb-3.pt-4
    div(dir="rtl").col-12.wrapper.d-flex.flex-column.align-items-center.justify-content-around
        slot
</template>

<script src="./wrapper.js"></script>

<style lang="scss">
.wrapper {
  overflow: hidden;
}
</style>

