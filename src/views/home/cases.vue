<template>
  <div class="cases">
    <h2>案例展示</h2>
    <p>描述</p>
    <div class="cases__video">
      <y-videowrap v-if="!isMobile" v-for="(video, idx) in videos" :key="idx" :src="video.path" :desc="video.title" :isIndex="true" style="margin-right: 40px"></y-videowrap>
      <swiper v-if="isMobile" :options="swiperOption">
        <swiper-slide v-for="(video, idx) in videos" :key="idx" :src="video.path" :desc="video.title" :isIndex="true">
          <y-videowrap :src="video.path" :desc="video.title" :isIndex="true"></y-videowrap>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <y-video v-if="videoShow" :current-video-src="currentVideoSrc" @close="videoShow = false"></y-video>
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
        },
      }
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

  }


#mobile {
  .cases {
    height: 440px;
    padding-top: 0px;
    top: 60px;
  }
  h2 {
    margin-top: 3.666667rem;
    margin-bottom: 2rem;
  }
  .cases__video {
    margin-top: 0px;
  }
  .videowrap {
    margin-bottom: 50px;
  }
}
</style>


