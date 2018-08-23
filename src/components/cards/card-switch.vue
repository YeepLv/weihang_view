<template>
  <div class="y-card--switch">
    <div class="y-card--switch__wrap">
      <h3>{{data.title}}</h3>
      <swiper :options="swiperOption">
        <swiper-slide>
          <img :src="data.content.imgUrl">
          <div class="detail">
            {{data.content.detail}}
          </div>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'YCardSwitch',
  props: ['data'],
  data () {
    return {
      swiperOption: {
        // autoplay: true,
        allowTouchMove: false,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted () {
    console.log(this.data)
  }
}
</script>
<style lang="scss">
@import "~@/styles/var";
@import "~@/styles/mixin";

.y-card--switch {
  text-align: center;
  padding: 20px;
  // border: 1px solid $color-light-grey;
  min-height: 520px;
  position: relative;
  font-size: $font-size-content;
  .y-card--switch__wrap {
    h3 {
      position: absolute;
      top: -.5em;
      left: 5%;
      right: 5%;
      background-color: $color-white;
    }
    img {
      width: 100%;
      height: 220px;
      margin: 35px 0 30px;
    }
    .detail {
      margin-bottom: 80px;
      line-height: 1.8;
      overflow: auto;
      font-family: 'SourceHanSansCN Light';
    }
    .swiper-pagination-bullet {
      height: 14px;
      left: 0 !important;
      margin: 0 10px;
      transform: none;
      transition: none !important;
      width: 14px;
    }
  }
}
</style>
