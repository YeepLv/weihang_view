<template>
  <div :id="appId">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      appId: this.$store.state.isMobile ? 'mobile' : 'pc'
    }
  },
  methods: {
    ...mapActions({
      detectScrollOffset: 'detectScrollOffset'
    })
  },
  mounted () {
    if (this.$store.state.isMobile) {
      const fontSize = `${this.$store.state.screenWidth / 25}px`  // 375width 1rem=15px
      document.querySelector('html').style['font-size'] = fontSize
    }
    this.detectScrollOffset()
  }
}
</script>

<style lang="scss">
@import '~@/styles/index';
#pc {
  min-width: $body-width-min;
  font: 14px/1.5  "SourceHanSansCN Regular", sans-serif, "微软雅黑", Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", STXihei, STHeiti, Heiti, SimSun;
  margin-top: -$nav-main-height;
}
#mobile {
  font-size: 1rem;
  font-family: 'PingFang TC', sans-serif
}
</style>
