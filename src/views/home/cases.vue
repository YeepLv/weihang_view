<template>
  <div class="cases">
    <h2>案例展示</h2>
    <p>描述</p>
    <div class="cases__video">
      <!-- <video-player :options="playerOptions" class="video-block"></video-player>
      <video-player :options="playerOptions" class="video-block"></video-player>
      <video-player :options="playerOptions" class="video-block"></video-player> -->
      <!-- <div v-for="video in videos" class="video-block">
        <video :src="video.src"></video>
        <span class="play-btn" @click="videoShow = true;currentVideoSrc = video.src">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofangjian-hover"></use>
          </svg>
        </span>
      </div> -->
      <y-videowrap v-for="(video, idx) in videos" :key="idx" :src="video.path" :desc="video.title" :isIndex="true" style="margin-right: 40px"></y-videowrap>
    </div>

    <y-video v-if="videoShow" :current-video-src="currentVideoSrc" @close="videoShow = false"></y-video>
  </div>
</template>

<script>

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
      currentVideoSrc: ''
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

}
</style>


