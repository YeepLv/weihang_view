<template>
  <div class="m-section" :class="{evenSec: isEven}">
    <div class="m-section__wrap f-content__wrap">
      <div class="m-section__main">
        <h2>{{data.name}}</h2>
        <div>
          <div class="m-section__pic pic-container">
            <img :src="data.url" alt="">
          </div>
          <div class="m-section__content">
            <p class="title">应用功能</p>
            <p class="feature" v-for="(de, idx) in data.desc" :key="idx">
              {{ de }}
            </p>
          </div>
          <div style="clear: both"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'YSectionCommon',
    props: ['data', 'isEven']
  }
</script>
<style lang="scss" scoped>
@import "~@/styles/var";
@import "~@/styles/mixin";

.m-section {
  .m-section__wrap {
    line-height: normal;
  }
  h2 {
    font-size: 48px;
    color: #000000;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 80px;
  }
  p {
    line-height: 34px;
    font-size: 16px;
    word-break: break-word;
    max-width: 450px;
  }
  .feature {
    padding-left: 10px;
    position: relative;
  }
  .feature:before {
    content: '';
    background: #0A96F0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: -3px;
    top: 15px;
  }
  &__wrap {
    // height: 70vh;
    // line-height: 70vh;
    // height: 720px;
    line-height: 720px;
  }
  &__main {
    display: block;
    margin: 0 auto;
    width: 960px;
    padding: 20px 0px 80px 0px;
    // height: 720px;
  }
  &__pic, &__content {
    // display: inline-block;
    // vertical-align: middle;
    font-size: 0;
    float: left;
  }
  &__pic {
    float: left;
    img {
      width: 100%;
    }
  }
  &__content {
    max-width: 380px;
    margin-left: 89px;
    .title {
      font-family: MicrosoftYaHei;
      font-size: 30px;
      color: #0A96F0;
      margin-bottom: 40px;
    }
  }
  &.evenSec {
    background-color: $color-lighter-grey;
    .pic-container {
      float: right;
      padding-right: 0;
    }
    .m-section__content {
      float: left;
    }
  }
}
#mobile {
  .m-section {
    .m-section__wrap {
      padding-top: 3rem;
      .m-section__main {
        padding: 0 0;
        .m-section__pic {
          line-height: 0;
          display: flex;
          justify-content: center;
          img {
            height: 100%;
            width: 100%;
          }
        }
        .m-section__content {
          margin-left: 0;
          .title {
            margin-bottom: 0.5rem;
          }
        }
      }
    }
    h2 {
      /*margin-bottom: 15px;*/
      margin-top: 0;
      font-weight: bold;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    &__main {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    &__wrap {
      height: auto;
      line-height: normal;
      padding-top: 55px;
      padding-bottom: 55px;
      line-height: 100vh;
    }
    &__pic {
      padding-right: 0;
      float: none;
      width: 100%;
      padding: 0 20px;
    }
    &__content {
      width: 100%;
    }
  }
}
</style>
