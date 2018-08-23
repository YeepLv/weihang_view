<template>
  <y-dialog class="y-cardDialog">
     <div class="y-cardDialog__body">
       <slot></slot>
     </div>
     <span class="y-cardDialog__close">×</span>
  </y-dialog>
</template>
<script>
  export default {
    name: 'YCardDialog'
  }
</script>
<style lang="scss">
  .y-cardDialog {
    &__body {
      position: relative;
    }
    &__close {
      position: absolute;

    }
  }
</style>