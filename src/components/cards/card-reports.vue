<template>
  <div class="y-cardReports">
    <a
      href="javascript:void(0);"
      target="_blank"
      class="y-cardReports__item"
      @click="showCtn(data)">
      <img :src="data.img" alt="">
      <h3>{{data.title}}</h3>
      <p>{{data.detail}}</p>
      <div class="y-cardArtical__sub">
        <span>{{data.date}}</span>
      </div>
    </a>
  </div>
</template>
<script>
  export default {
    name: 'YCardReports',
    props: {
      data: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {

      /**
       * 显示内容
       * @param {Object} data 内容
       */
      showCtn (data) {
        const self = this
        self.$emit('showCtn', data)
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "~@/styles/var";
@import "~@/styles/mixin";

.y-cardReports {
  &__item {
    display: inline-block;
    width: 100%;
    font-size: $font-size-content;

    img {
      width: 100%;
      margin-bottom: 20px;
    }
    h3 {
      font-size: $font-size-title-sub;
      line-height: 1.5;
      margin-bottom: 20px;
    }
    p {
      color: $color-font-grey;
      height: 90px;
      line-height: 1.89;
    }
    span {
      color: $color-base-grey;
    }
    .y-cardArtical__sub {
      margin-top: 20px;
    }
  }
}

#mobile {
  .y-cardReports {
    .y-cardArtical__sub {
      text-align: right;
    }
  }
}
</style>
