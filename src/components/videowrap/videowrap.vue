<template>
  <div class="videowrap" :class="{'index-wrap': isIndex}" @mouseover="maskShow = true" @mouseout="maskShow = false">
    <div class="video-container" @click.stop="videoShow = true;currentVideoSrc = src">
      <video ref="videoRef" :src="src" v-show="false"></video>
      <div style="height: 100%">
        <img :src="poster" alt="" style="width: 100%;height: 100%;" :style="{ borderRadius: isIndex ? '190px' : '20px'}">
      </div>
      <svg v-if="!isMobile" class="icon play-btn" :class="{'small-btn': type === 'small'}" v-show="maskShow" aria-hidden="true">
        <use xlink:href="#icon-bofangjian-hover"></use>
      </svg>
      <svg class="icon play-btn" :class="{'small-btn': type === 'small'}" v-show="!maskShow || isMobile" aria-hidden="true">
        <use xlink:href="#icon-bofangjian-moren"></use>
      </svg>
      <div v-if="!isMobile" class="mask" :class="{'small-mask': type === 'small'}" v-show="maskShow" :style="{ borderRadius: isIndex ? '190px' : '20px'}"></div>
    </div>
    <p class="video-desc">{{ desc }}</p>
    <y-video v-if="videoShow" :current-video-src="currentVideoSrc" @close="videoShow = false" :isIndex="isIndex"></y-video>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['src', 'desc', 'isIndex', 'type', 'poster'],
  name: 'YVideowrap',
  data () {
    return {
      maskShow: false,
      videoShow: false,
      currentVideoSrc: ''
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'isMobile'
    })
  },
  watch: {
    videoShow (val) {
      if (val) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.videowrap {
  width: 460px;
  height: 260px;
  display: inline-block;
  margin-bottom: 150px;
  vertical-align: middle;

  .video-container {
    position: relative;
    height: 260px;
  }

  video {
    width: 460px;
    height: 260px;
  }
  .play-btn {
    top: 100px;
    left: 200px;
    position: absolute;
    width: 60px;
    height: 60px;
    color: #fff;
    z-index: 2;
    cursor: pointer;
  }
  .video-desc {
    font-size: 18px;
    color: #000000;
    text-align: left;
    margin-top: 30px;
    line-height: 32px;
  }
  .mask {
    width: 100%;
    height: 260px;
    background-image: linear-gradient(-135deg, #0A96F0 0%, #00DCF0 100%);
    opacity: .4;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.index-wrap {
  width: 300px;
  .play-btn {
    left: 120px;
  }
}


#mobile {
  .videowrap {
    width: 270px;
    height: 190px;

    .video-container {
      height: 90px;
    }
    video {
      width: 270px;
      height: 190px;
    }

    .mask {
      height: 190px;
    }
    .play-btn {
      width: 40px;
      height: 40px;
      top: 70px;
      left: 115px;
    }
    .video-desc {
      margin-top: 8px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .small-mask {
    height: 90px !important;
  }
  .small-btn {
    width: 30px !important;
    height: 30px !important;
    top: 30px !important;
    left: 60px !important;
  }
}
</style>
