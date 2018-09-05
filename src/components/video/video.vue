<template>
  <div class="y-video">
    <div class="content" @click="$emit('close')"></div>
    <video-player class="vjs-custom-skin vjs-big-play-centered video-player" :style="{transform: (isIndex && isMobile) ? 'none' : 'translate(0, 50%)'}" :options="playerOptions"></video-player>
  </div>
</template>

<script>
import 'video.js/dist/video-js.min.css'
import { videoPlayer } from 'vue-video-player'
import { mapGetters } from 'vuex'

export default {
  components: {
    videoPlayer
  },
  props: ['currentVideoSrc', 'isIndex'],
  name: 'YVideo',
  data () {
    const that = this
    return {
      playerOptions: {
        // videojs options
        width: (document.body.clientWidth < 1024) ? document.body.clientWidth : 960,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        // poster: "/static/banner0.png",
        sources: [{
          type: 'video/mp4',
          src: that.currentVideoSrc
        }]
      }
    }
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

.y-video {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgba(0,0,0,.7);
  z-index: 10000;

  .video-player {
    width: 960px;
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
