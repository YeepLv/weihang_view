<template>
  <div class="cases">
    <h2>案例展示</h2>
    <!-- <p>点击以下视频可观看智慧云课堂的各类延伸应用场景</p> -->
    <div class="cases__video">
      <y-videowrap v-if="!isMobile" v-for="(video, idx) in videos" :key="idx" :src="video.path" :poster="video.imageUrl" :desc="video.title" :isIndex="true" style="margin-right: 40px"></y-videowrap>
      <swiper v-if="isMobile" :options="swiperOption">
        <swiper-slide v-for="(video, idx) in videos" :key="idx">
          <div class="video-template" @click.stop="clickVideo(video)">
            <div class="video-container">
              <div style="height: 100%">
                <img :src="video.imageUrl" alt="" style="width: 100%;height: 100%;" :style="{ borderRadius: '190px' }">
              </div>
              <svg class="icon play-btn" aria-hidden="true">
                <use xlink:href="#icon-bofangjian-moren"></use>
              </svg>
            </div>
            <p class="video-desc">{{ video.title }}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <y-video v-if="videoShow && isMobile" :current-video-src="currentVideo.path" @close="videoShow = false"></y-video>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'

export default {
  mounted () {
    this.$http.get('/api/website/video', {
      params: {
        pageNo: 1,
        pageSize: 10
      }
    }).then((res) => {
      this.videos = res.body.data.list.slice(0, 3)
      this.currentVideo = this.videos[0]
    })
  },
  data () {
    return {
      videoShow: false,
      videos: [],
      currentVideoSrc: '',
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      currentVideo: {}
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapGetters({
      isMobile: 'isMobile'
    })
  },
  methods: {
    clickVideo (video) {
      this.currentVideo = video
      this.videoShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/var";
@import "~@/styles/mixin";


  .cases {
    height: 900px;
    padding-top: 150px;
    text-align: center;
    position: relative;

    h2 {
      font-family: $font-family;
      font-size: 60px;
      color: #000000;
    }
    p {
      margin-top: 40px;
      line-height: 30px;
      font-size: $font-size-content;
      color: #666666;
    }
    .video-block {
      display: inline-block;
      position: relative;
      margin-right: 60px;
      video {
        border-radius: 300px;
        width: 350px;
      }
      .play-btn {
        position: absolute;
        color: #fff;
        top: 70px;
        left: 150px;
        cursor: pointer;
        svg {
          width: 60px;
          height: 60px;
        }
      }
    }
    &__video {
      margin-top: 120px;
    }
    .video-template {
      width: 270px;
      height: 260px;
      .video-container {
        position: relative;
        height: 190px;
      }
      .play-btn {
        position: absolute;
        color: #fff;
        z-index: 2;
        cursor: pointer;
        width: 40px;
        height: 40px;
        top: 75px;
        left: 115px;
      }
      .video-desc {
        font-size: 18px;
        color: #000000;
        text-align: left;
        line-height: 32px;
        margin-top: 8px !important;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .mask {
        width: 100%;
        height: 190px;
        background-image: linear-gradient(-135deg, #0A96F0 0%, #00DCF0 100%);
        opacity: .4;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }


#mobile {
  .cases {
    height: 440px;
    padding-top: 0px;
    top: 60px;

    p {
      margin-top: 20px;
    }
    .swiper-slide {
      display: flex;
      justify-content: center;
    }
  }
  h2 {
    margin-top: 2.666667rem;
    margin-bottom: 1rem;
  }
  .cases__video {
    margin-top: 20px;
  }
  .videowrap {
    margin-bottom: 50px;
  }
  >>>.y-video .video-player {
    transform: none !important;
  }
}
</style>


