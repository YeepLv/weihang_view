<template>
  <div class="live">
    <y-menu :opened-index="3" :isIndex="true" class="menu"></y-menu>
    <div class="live-outer">
      <div class="live-container" v-show="!liveIsOk">
        <!-- 当前暂无直播，您可以先观看下方历史直播 -->
        <img :src="liveImg" alt="">
      </div>
      <div class="live-stream" v-show="liveIsOk">
        <!-- <video ref="liveStream" src="http://121.201.65.88:9080/app/80b6977a6f024dd1b1035f1bfef3e3c4_2.m3u8"></video>
        <video ref="liveStream" controls src="rtmp://121.201.65.88:1935/live/e8b0755f48f0456cacba1c6d05ec68e2_0"></video>
        <video ref="liveStream" controls src="http://121.201.65.88:9080/app/e8b0755f48f0456cacba1c6d05ec68e2_0.m3u8"></video> -->
        <video-player ref="live" @canplay="onPlayerCanplay($event)" class="vjs-custom-skin vjs-big-play-centered" :options="pcPlayerOptions">
        </video-player>
      </div>
    </div>
    <div class="histroy">
      <h2>历史直播</h2>
      <div class="video-list">
          <!-- <video :src="video.src"></video>
          <span class="play-btn" @click="videoShow = true;currentVideoSrc = video.src">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofangjian-hover"></use>
            </svg>
          </span> -->
          <y-videowrap class="histroy-video" type="small" :isIndex="false" v-for="(video, idx) in videos" :key="idx" :poster="video.imageUrl" :src="video.path" :desc="video.title" :style="{ marginRight: (40 - (idx % 2) * 40) + 'px'}"></y-videowrap>
      </div>
    </div>
    <y-footer :footer-type="0"></y-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { videoPlayer } from 'vue-video-player'
import 'videojs-flash'
import 'videojs-contrib-hls/dist/videojs-contrib-hls.js'
import welcomeBg from '@/assets/welcome-bg.png'

export default {
  mounted () {
    this.$http.get('/api/website/video', {
      params: {
        pageNo: 1,
        pageSize: 10
      }
    }).then((res) => {
      this.videos = res.body.data.list
    })
    this.$http.get('/api/website/liveConfig').then((res) => {
      this.liveImg = res.body.data.imageUrl
      this.pcPlayerOptions.sources[0].src = res.body.data.http
      console.log(res.body.data)
    })
  },
  computed: {
    ...mapGetters({
      isMobile: 'isMobile'
    })
  },
  data () {
    return {
      videos: [],
      liveIsOk: false,
      pcPlayerOptions: {
        // videojs and plugin options
        height: (document.body.clientWidth < 1024) ? 200 : 540,
        width: (document.body.clientWidth < 1024) ? document.body.clientWidth : 960,
        sources: [{
          withCredentials: false,
          type: 'application/x-mpegURL',
          src: 'http://121.201.65.88:9080/app/e8b0755f48f0456cacba1c6d05ec68e2_0.m3u8'
          // src: 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8'
        }],
        controlBar: {
          timeDivider: false,
          durationDisplay: false
        },
        flash: {hls: { withCredentials: false }},
        html5: {hls: { withCredentials: false }},
        poster: welcomeBg,
      },
      liveImg: ''
    }
  },
  methods: {
    onPlayerCanplay (e) {
      this.liveIsOk = true
    }
  },
  components: {
    videoPlayer
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/var";

.live {
  .live-outer {
    padding-top: 200px;
    background: #F9F9F9;
    padding-bottom: 50px;
  }
  .live-container {
    width: 960px;
    height: 540px;
    line-height: 540px;
    background-image: linear-gradient(-135deg, #0A96F0 0%, #00DCF0 100%);
    box-shadow: 0 20px 30px 0 rgba(10,150,240,0.20);
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    font-family: $font-family;
    font-size: 24px;
    color: #FFFFFF;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .histroy {
    margin-top: 120px;
    padding-bottom: 120px;
    h2 {
      text-align: center;
      font-family: $font-family;
      font-size: 48px;
      color: #000000;
      margin-bottom: 60px;
    }
  }
  .video-list {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .live-stream {
    width: 960px;
    margin-left: auto;
    margin-right: auto;

    video {
      width: 100%;
      height: 540px;
    }
  }
}

#mobile {
  .live {
    overflow-x: hidden;
    .live-outer {
      padding-top: 60px;
      padding-bottom: 0px;
    }
    .live-container {
      width: 100%;
      height: 210px;
      border-radius: 0px;
      line-height: 210px;
      font-size: 16px;
      box-shadow: none;
    }
    .histroy {
      margin-top: 60px;
      padding-bottom: 0px;
    }
    .video-list {
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      justify-content: space-between;
    }
  }
  .histroy-video {
    width: 150px !important;
    height: 90px !important;
    margin-bottom: 40px !important;
    margin-right: 0px !important;
  }

}
</style>
