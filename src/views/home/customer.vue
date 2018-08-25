<template>
  <div class="customer">
    <div class="customer__wrap">
      <h2>与我们合作的客户</h2>
      <ul>
        <li v-for="(item, index) in customer" :key="index">
          <img :src="item.img">
        </li>
      </ul>
      <a href="javascript:void(0);">客户故事</a>
    </div>
  </div>
</template>
<script>
// import logo from '@/assets/logo.png'

export default {
  data () {
    return {
      customer: []
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/var";
@import "~@/styles/mixin";

.customer {
  &__wrap {
    margin: auto;
    height: 100%;
    position: relative;
    padding: 160px 0;
    text-align: center;
    width: 1200px;
  }
  h2 {
    color: $color-primary;
    font-size: 60px;
    margin: 0 0 60px;
    line-height: 1;
  }
  ul {
    @include clearfix;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    float: left;
    height: 120px;
    width: 240px;
    img {
      height: 100%;
    }
  }
  a {
    @include btn(49px, $color-primary);
    border: 1px solid $color-primary;
    color: $color-primary;
    margin-top: 60px;
    padding: 0 36px;
  }
}
</style>
