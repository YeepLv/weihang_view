<template>
  <div class="videowrap" @mouseover="maskShow = true" @mouseout="maskShow = true">
    <div class="video-container" @click.stop="videoShow = true;currentVideoSrc = src">
      <video ref="videoRef" :src="src" v-show="false"></video>
      <div>
        <!-- <img src="poster" alt="" style="width: 100%;height: 100%"> -->
      </div>
      <svg class="icon play-btn" :class="{'small-btn': type === 'small'}" v-show="maskShow" aria-hidden="true">
        <use xlink:href="#icon-bofangjian-hover"></use>
      </svg>
      <svg class="icon play-btn" :class="{'small-btn': type === 'small'}" v-show="!maskShow" aria-hidden="true">
        <use xlink:href="#icon-bofangjian-moren"></use>
      </svg>
      <div class="mask" :class="{'small-mask': type === 'small'}" v-show="maskShow" :style="{ borderRadius: isIndex ? '190px' : '20px'}"></div>
    </div>
    <p v-if="!isMobile" class="video-desc">{{ desc }}</p>
    <y-video v-if="videoShow" :current-video-src="currentVideoSrc" @close="videoShow = false" :isIndex="isIndex"></y-video>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['src', 'desc', 'isIndex', 'type', 'poster'],
  name: 'YVideowrap',
  mounted () {
    const video = this.$refs['videoRef']
    video.addEventListener('loadeddata', this.captureImage)
    const that = this
    // document.addEventListener('click', function () {
    //   that.videoShow = false
    //   that.maskShow = true
    // })
  },
  methods: {
    captureImage () {
      const video = this.$refs['videoRef']
      const canvas = document.createElement('canvas')
      canvas.width = 460
      canvas.height = 260
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

      var img = document.createElement('img')
      img.src = canvas.toDataURL('image/png')
      img.style.width = '100%'
      img.style.height = '100%'
      if (this.isIndex) {
        img.style.borderRadius = '190px'
      } else {
        img.style.borderRadius = '20px'
      }
      this.$refs['poster'].appendChild(img)
    }
  },
  data () {
    return {
      maskShow: true,
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
    opacity: .7;
    position: absolute;
    top: 0;
    left: 0;
  }
}


#mobile {
  .videowrap {
    width: 270px;
    height: 190px;

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
