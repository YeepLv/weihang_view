<template>
  <div class="live">
    <y-menu :opened-index="3" :isIndex="true" class="menu"></y-menu>
    <div style="padding-top: 200px;background: #F9F9F9;padding-bottom: 50px;">
      <div class="live-container" v-show="!liveIsOk">
        当前暂无直播，您可以先观看下方历史直播
      </div>
      <div class="live-stream" v-show="liveIsOk">
        <video ref="liveStream" src="http://121.201.65.88:9080/app/80b6977a6f024dd1b1035f1bfef3e3c4_2.m3u8"></video>
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
          <y-videowrap :isIndex="false" v-for="(video, idx) in videos" :key="idx" :src="video.path" :desc="video.title" :style="{ marginRight: (40 - (idx % 2) * 40) + 'px'}"></y-videowrap>
      </div>
    </div>
    <y-footer :footer-type="0"></y-footer>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$http.get('/api/website/video', {
      params: {
        pageNo: 1,
        pageSize: 10
      }
    }).then((res) => {
      this.videos = res.body.data.list
    })
    console.log(this.$refs['liveStream'].networkState)
    if (this.$refs['liveStream'].networkState !== 3) {
      this.liveIsOk = true
    }
  },
  data () {
    return {
      videos: [],
      liveIsOk: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/var";

.live {
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
  }

  .histroy {
    margin-top: 120px;
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
</style>
