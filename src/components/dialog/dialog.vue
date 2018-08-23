<template>
  <div class="y-dialog">
    <div class="y-dialog__wrapper">
      <div
        class="y-dialog__main"
        :style="Object.keys(wrapperStyle).length > 0 ? wrapperStyle : {}">
        <div
          class="y-dialog__body"
          :style="Object.keys(customStyle).length > 0 ? customStyle : {}">
          <slot></slot>
        </div>
        <span class="btn-close" @click="close">×</span>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'YDialog',
    props: {
      title: {
        type: String,
        default: ''
      },
      customStyle: {
        type: Object,
        default () {
          return {}
        }
      },
      wrapperStyle: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    computed: {
      ...mapGetters({
        isMobile: 'isMobile'
      })
    },
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>
<style lang="scss">
@import "~@/styles/var";
@import "~@/styles/mixin";
$header-height: 60px;
$padding-width: 30px;

.y-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  text-align: center;
  background-color: rgba(0, 0, 0, .4);
  z-index: 10000;
  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  &__main {
    width: 400px;
    margin: 0 auto;
    position: relative;
    // margin-top: -100px;
  }
  &__body {
    position: relative;
    background-color: $color-white;
    padding: 30px $padding-width 30px $padding-width;
  }
  .btn-close {
    position: absolute;
    width: 60px;
    line-height: 60px;
    font-size: 40px;
    right: -60px;
    top: -60px;
    color: #fff;
    font-weight: 200;
  }
}
#mobile {
  .y-dialog {
    &__main {
      width: 92%;
      max-width: 440px;
      margin-top: 4vh;
    }
    &__header {
      padding: 0 20px;
    }
    &__body {
      padding: .666667rem 1.333333rem;
      padding-top: 2rem;
    }
    .btn-close {
      right: 0;
      width: auto;
    }
  }
}
</style>
