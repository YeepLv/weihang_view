<template>
  <div class="solution" :class="{'f-fullscreen' :!isMobile}">
    <img :src="sec.bgUrl" class="img-ani__wrap" v-for="sec in secsMap" :class="'img-ani__' + sec.name">
    <div class="solution__wrap f-content__wrap">
      <h2>方案中心</h2>
      <ul class="f-divide__column--inline">
        <template v-for="item in secsMap">
          <li class="item" :class="'item-' + item.name" @mouseenter="changeStyle(item.name, 'enter')" @mouseleave="changeStyle(item.name, 'leave')">
            <div class="solution__block">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
              </svg>
              <h3>{{item.title}}</h3>
            </div>
            <div class="solution__detail">
              <a href="javascript:void(0)" @click="$router.push(item.url)" class="u-btn__white">查看详情</a>
              <p>{{item.desc}}</p>
            </div>
          </li>
          {{ !isMobile ? '&nbsp;' : '' }}
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import bgFinance from '@/assets/solution-bg-education.png'
import bgService from '@/assets/solution-bg-tech.png'

export default {
  data () {
    return {
      isMobile: this.$store.state.isMobile,
      bgWrapper: null,
      bgScaleMax: 1.05,
      secsMap: {
        finance: {
          url: '/solution/finance',
          bgUrl: this.$store.state.isMobile ? bgMobile : bgFinance,
          name: 'finance',
          icon: '#icon-jujiaojiaoyu',
          title: '聚焦教育',
          desc: '文案',
          logoUrls: [{
            url: zsyh
          }, {
            url: ftzq
          }, {
            url: nfjj
          }, {
            url: cjzq
          }, {
            url: ygbx
          }, {
            url: fql
          }]
        },
        service: {
          url: '/solution/service',
          bgUrl: bgService,
          name: 'service',
          icon: '#icon-jujiaokeji',
          title: '聚焦科技',
          desc: '文案',
          logoUrls: [{
            url: wdjt
          }, {
            url: xm
          }, {
            url: gmdq
          }, {
            url: bb
          }, {
            url: jp
          }]
        }
      },
      currentSec: ''
    }
  },
  methods: {

    /**
     * 更改背景块显示
     * @param {String} className 背景类名
     */
    changeStyle (secName, type) {
      if (this.isMobile) return
      const isSelf = this.currentSec.name === secName
      if (isSelf) return
      this.hideBg()
      this.currentSec = this.secsMap[secName]
      this.showBg()
    },

    /**
     * 背景动画 隐藏背景
     */
    hideBg () {
      TweenMax.to(this.currentBgDom, 0.6, {
        autoAlpha: 0,
        scale: 1,
        force3D: !0
      })
    },

    /**
     * 背景动画 展示背景
     */
    showBg () {
      const currentBgDom = this.currentBgDom
      TweenMax.to(currentBgDom, 2, {
        autoAlpha: 1
      })
      TweenMax.to(currentBgDom, 3, {
        scale: this.bgScaleMax,
        force3D: !0,
        onComplete: () => {
          TweenMax.to(currentBgDom, 3, {
            scale: 1
          })
        }
      })
    },

    /**
     *  初始化背景
     */
    initBg () {
      Object.keys(this.secsMap).forEach((key) => {
        const item = this.secsMap[key]
        const imgDom = document.querySelector(`.img-ani__${item.name}`)
        TweenMax.set(imgDom, {
          autoAlpha: 0,
          scale: 1,
          force3D: !0
        })
      })
      TweenMax.set(this.currentBgDom, {
        autoAlpha: 1,
        scale: this.bgScaleMax,
        force3D: !0
      })
    }
  },
  computed: {
    currentBgDom () {
      return document.querySelector(`.img-ani__${this.currentSec.name}`)
    }
  },
  mounted () {
    this.currentSec = this.secsMap.finance
    this.initBg()
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/var";
@import "~@/styles/mixin";

.solution {
  color: $color-white;
  /*padding: 200px 0;*/
  text-align: center;
  position: relative;
  overflow: hidden;
  top: 80px;
  font-size: $font-size-content;
  min-height: 1000px;
  .solution__detail {
    a {
      opacity: 0;
    }
    p {
      opacity: 0;
      transform: translateY(10px);
      transition: opacity,transform .4s;
    }
  }
  .item {
    position: relative;
    width: 280px;
    top: 40px;
    height: 80vh;
    &:hover {
      .solution__detail {
        a {
          opacity: 1;
        }
        p {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    }
  }
  &-logos__wrap {
    position: absolute;
    bottom: -120px;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: $color-white;
    padding: 40px 0;
    img {
      height: 40px;
      vertical-align: middle;
      margin-right: 70px;
    }
  }
  .img-ani__wrap {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
  &__wrap {
    text-align: center;
    position: relative;
    z-index: 10;
    top: 220px;
  }
  &__block {
    cursor: pointer;
    text-align: center;
    .icon {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
    }
  }
  &__detail {
    text-align: center;
    margin-top: 20px;
    width: 280px;
    position: absolute;
    // transform: translateX(-20px);
    a {
      margin-bottom: 20px;
    }
    p {
      line-height: 28px;
      font-family: $font-family;
    }
  }
  .bgimg {
    background: {
      position: center center;
      size: cover;
    }
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
  h2 {
    margin-bottom: 100px;
  }
  h3 {
    white-space: nowrap;
  }
}
#mobile {
  .solution {
    min-height: 0;
    top: 0;
    &__wrap {
      top: 14%;
    }
    .img-ani__wrap img-ani__finance {
      transform: none;
    }
    .item {
      // float: left;
      width: 100%;
      margin-bottom: 1.33rem;
      height: 11rem;
      top: auto;
      &-finance {
        margin-bottom: 2.4rem;
      }
      &-service {
        margin-bottom: 3.06rem;
      }
      &-retail {
        margin-bottom: 0;
      }
    }
    &__detail {
      display: none;
    }
    h2 {
      margin-top: 3.666667rem;
      margin-bottom: 2rem;
    }
    h3 {
      margin-top: -.666667rem;
      font-family: $font-family;
    }
    .icon {
      width: 6.666667rem;
      height: 6.666667rem;
    }
    img {
      width: auto;
    }
  }
}
</style>
