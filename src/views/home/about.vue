<template>
  <div class="about">
    <div class="about__wrap f-content__wrap">
      <div class="about__desc">
        <h2>部分合作学校</h2>
        <p>玮航教育的主要用户包括教育局、学校、教育机构、事业单位等，提供一系列定制化服务</p>
        <img src="@/assets/about-school.jpg" style="margin-top: 40px;">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isMobile: this.$store.state.isMobile
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/var";
@import "~@/styles/mixin";

.about {
  min-height: 940px;
  color: $color-white;
  padding: 120px 0 0 0;
  background-image: url(~@/assets/about.png);
  background-size: cover;
  background-position: center center;
  font-family: $font-family;
  color: #000000;
  &__desc {
    h2 {
      margin-bottom: 30px;
      font-size: 60px;
    }
    p {
      line-height: 30px;
      font-size: $font-size-content;
      color: #666666;
    }
    a {
      margin-top: 60px;
      border-width: 2px;
      &:hover {
        background-color: transparent;
        color: $color-white;
        border-color: $color-white;
      }
    }
  }

  &__wrap {
    width: 960px;
    text-align: center;
  }
}
#mobile {
  .about {
    padding: 3.666667rem 0 320px;
    text-align: center;
    min-height: 400px;
    height: 400px;
    // background-image: url(~@/assets/mobile/map.png);
    background-size: cover;
    a {
      margin-top: 2rem;
    }
    h2 {
      margin-bottom: 2.666667rem;
      font-family: $font-family;
    }
    p {
      line-height: 1.5;
      width: 80%;
      margin: 0 auto;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
