<template>
  <div class="m-page__banner">
    <h2>{{title}}</h2>
    <div class="nav__menu" v-if="showTab">
      <div class="nav__menu__item" @click="activeNum = 0" :class="{'active': activeNum === 0}">
        <span>聚焦教育</span>
        <div class="nav__menu__bar">
          <span style="left: 0%"></span>
          <span style="left: 50%"></span>
          <span style="left: 100%"></span>
        </div>
      </div>
      <div class="nav__menu__item" @click="activeNum = 1" :class="{'active': activeNum === 1}">
        <span>聚焦科技</span>
        <div class="nav__menu__bar">
          <span style="left: 0%"></span>
          <span style="left: 50%"></span>
          <span style="left: 100%"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YBanner',
  props: ['title', 'showTab'],
  watch: {
    '$route' (to, from) {
      this.activeNum = +to.query.tab || 0
    },
    activeNum (val) {
      this.$emit('changeTab', val)
    }
  },
  mounted () {
    this.activeNum = +this.$route.query.tab || 0
  },
  data () {
    return {
      activeNum: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/var";
@import "~@/styles/mixin";

.m-page__banner {
  background-image: $color-gradient-bg;
  height: 420px;
  line-height: 470px;
  text-align: center;
  position: relative;
  h2 {
    display: inline-block;
    font-size: 54px;
    color: $color-white;
    vertical-align: middle;
    font-weight: normal;
    width: 100%;
    // font-family: SourceHanSansCN-Bold;
  }
  .nav__menu {
    position: absolute;
    bottom: 50px;
    color: #FFFFFF;
    text-align: center;
    width: 100%;
    // font-family: MicrosoftYaHei;
    font-size: 16px;
    line-height: 20px;

    &__item {
      width: 190px;
      display: inline-block;
      cursor: pointer;
      opacity: 0.8;
    }
    .active {
      opacity: 1;
      font-weight: bold;
    }
    &__bar {
      background: #fff;
      height: 2px;
      margin-top: 24px;
      position: relative;

      span {
        background: #fff;
        bottom: 0;
        height: 10px;
        position: absolute;
        width: 1px;
      }
    }
  }
}
#mobile {
  .m-page__banner {
    height: 260px;
    line-height: 260px;
    .nav__menu {
      bottom: 1.2rem;
      &__item {
        width: 110px;
        display: inline-block;
        cursor: pointer;
        opacity: 0.8;

        span {
          font-size: 14px;
          font-weight: 400;
        }
      }
      .active {
        opacity: 1;
        font-weight: bold;
      }
      &__bar {
        margin-top: 15px;
        height: 1px;
        span {
          height: 5px;
        }
      }
    }
  }
  h2 {
    font-size: 2rem;
  }
}
</style>
