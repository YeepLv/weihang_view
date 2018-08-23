<template>
  <div class="y-video">
    <div class="content" @click="$emit('close')"></div>
    <video-player class="vjs-custom-skin vjs-big-play-centered video-player" :options="playerOptions"></video-player>
  </div>
</template>

<script>
import 'video.js/dist/video-js.min.css'
import { videoPlayer } from 'vue-video-player'

export default {
  components: {
    videoPlayer
  },
  props: ['currentVideoSrc'],
  name: 'YVideo',
  data () {
    const src = this.currentVideoSrc
    return {
      playerOptions: {
        // videojs options
        width: 600,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        // poster: "/static/banner0.png",
        sources: [{
          type: 'video/mp4',
          src
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/var";
@import "~@/styles/mixin";

.y-video {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgba(0,0,0,.5);
  z-index: 10000;

  .video-player {
    width: 600px;
    left: 50%;
    top: 50%;
    transform: translate(0, 50%);
    margin-left: auto;
    margin-right: auto;
    z-index: 10001;
  }
  .content {
    width:100%;
    height:100%;
    position:fixed;
  }
}
</style>
