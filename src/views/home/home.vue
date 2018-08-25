<template>
  <div class="home">
    <y-menu class="home-menu" :isIndex="true" :opened-index="0"></y-menu>
    <welcome id="home-welcome"></welcome>
    <solution id="home-solution"></solution>
    <cases></cases>
    <about></about>
      <!-- <y-trial ref="home-trial" id="home-trial"></y-trial> -->
      <y-footer :footer-type="1"></y-footer>
  </div>
</template>
<script>
import welcome from './welcome'
import solution from './solution'
import about from './about'
import cases from './cases'

export default {
  components: {
    welcome,
    solution,
    about,
    cases
  },
  data () {
    return {
      options: {},
      isBlue: false
    }
  },
  mounted () {
    // document.addEventListener('scroll', () => {
    //   // 滚动条距离
    //   const scrollY = window.scrollY
    //   // dom距离顶部距离
    //   const offsetTop = this.$refs['home-left'].offsetTop
    //   // dom高度
    //   const offsetHeight = this.$refs['home-trial'].$el.offsetHeight
    //   // banner进入该div或者离开div
    //   if (scrollY - offsetTop > -80 && (scrollY - offsetTop - offsetHeight) < 0) {
    //     this.isBlue = true
    //   } else {
    //     this.isBlue = false
    //   }
    // })
    // const winHeight = window.innerHeight
    // const controller = new ScrollMagic.Controller({
    //   globalSceneOptions: {
    //     triggerHook: 'onLeave'
    //   }
    // })

    // const fullscreenDoms = ['#home-welcome', '#home-solution', '#home-left']

    // fullscreenDoms.forEach((item) => {
    //   const dom = document.querySelector(item)
    //   new ScrollMagic.Scene({
    //     triggerElement: dom
    //   })
    //   .setPin(dom)
    //   .addTo(controller)
    // })
  }
}
</script>
<style lang="scss" scoped>
  #home-left {
    position: relative;
    top: 80px;
  }
  .video-js .vjs-tech {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 300px;
  }
</style>
