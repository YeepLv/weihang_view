<template>
  <div class="welcome f-fullscreen">
    <!-- <video id="bg-video" class="video-js vjs-default-skin" loop autoplay v-if="!isMobile">
      <source src="~@/assets/banner.mp4" type="video/mp4">
    </video> -->
    <swiper :options="swiperOption" style="height: 100%">
      <swiper-slide>
        <img v-if="!isMobile" :src="welcomeBgUrl" style="height: 100%;width: 100%">
        <div class="welcome-desc">
          <h2>行科技之舟，渡中国教育之梦</h2>
          <a href="javascript:void(0)" class="u-btn__white">查看详情</a>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img v-if="!isMobile" src="@/assets/banner5.gif" style="height: 100%;width: 100%">
        <div class="welcome-desc">
          <h2>玮航教育五朵云解决方案</h2>
          <a href="javascript:void(0)" class="u-btn__white">查看详情</a>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img v-if="!isMobile" src="@/assets/banner2.png" style="height: 100%;width: 100%">
        <div class="welcome-desc">
          <h2>教育精准扶贫——双师教学</h2>
          <a href="javascript:void(0)" class="u-btn__white">查看详情</a>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img v-if="!isMobile" src="@/assets/banner3.png" style="height: 100%;width: 100%">
        <div class="welcome-desc">
          <h2>如何应对新高考改革 重视生涯教育</h2>
          <a href="javascript:void(0)" class="u-btn__white">查看详情</a>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img v-if="!isMobile" src="@/assets/banner4.png" style="height: 100%;width: 100%">
        <div class="welcome-desc">
          <h2>教育信息化2.0时代的智慧教育</h2>
          <a href="javascript:void(0)" class="u-btn__white">查看详情</a>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <img v-if="isMobile" class="mobile-bg-earth" :src="welcomeBgUrl">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import welcomeBg from '@/assets/welcome-bg.png'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      welcomeBgUrl: welcomeBg,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'isMobile'
    })
  },
  mounted () {
    // particlesJS('home-welcome', particles)
    if (document.querySelector('#bg-video')) {
      videojs('bg-video')
    }
  }
}
</script>
<style lang="scss">
@import "~@/styles/var";
@import "~@/styles/mixin";

#bg-video {
  width: 100%;
  height: 100%;
  background-color: #083CCE !important;
}
.particles-js-canvas-el {
  position: absolute;
  top: 0;
  left: 0;
}
#home-welcome {
  /*min-width: 1200px;*/
  position: relative;
  max-height: 100vh;
  overflow: hidden;
  width: 100%;
  top: 80px;

  // 欢迎语
  .welcome-desc {
    font-family: $font-family;
    color: $color-white;
    font-weight: normal;
    text-align: center;
    letter-spacing: 10px;
    line-height: 1;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    line-height: 1.4;
    z-index: 3;
    h2 {
      margin-bottom: 40px;
    }
  }
}
#mobile {
  #home-welcome {
    max-height: 100vh;
    background: #0033CC;
    top: 0;
    h2 {
      white-space: nowrap;
      letter-spacing: 0;
    }
  }
  .welcome {
    position: relative;
    .mobile-bg-earth {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 16.4rem;
      height: 16.4rem;
    }
  }
}
</style>
