<template>
  <div class="y-menu yi-menu__pc">
    <div class="y-menu__bar" v-if="!isMobile">
      <a href="/" class="y-menu__logo left">
        <img style="margin-top: 20px" v-if="isIndex" src="@/assets/logo.svg">
        <img style="margin-top: 20px" v-if="!isIndex" src="@/assets/logo-white.svg">
      </a>
      <span class="y-menu__text" :class="{ 'current': (index === openedIndex && isIndex), 'current-white': (index === openedIndex && !isIndex), 'first-text': openedIndex === 0, 'color-white': !isIndex }" v-for="(menu0, index) in menus" :key="index">
        <span v-if="menu0.url" @click.stop="changeState(index)"><router-link :to="menu0.url">{{menu0.name}}</router-link></span>
        <div class="nav-div" v-if="menu0.showNav && openedIndex === index && globalShowNav">
          <span v-for="(nav, navIdx) in menu0.navs" :key="navIdx" @click="test(navIdx)">
            {{ nav }}
            <hr v-if="navIdx !== menu0.navs.length - 1">
          </span>
        </div>
      </span>
    </div>
    <div class="y-menu__bar-mobile" v-if="isMobile">
      <a href="/" class="y-menu__logo-mobile">
        <img src="@/assets/logo.svg">
      </a>
      <div @click="showToggleMenu">
        <span class="iconfont y-menu__toggle" :class="isOpend ? 'icon-close' : 'icon-spread'"></span>
      </div>
    </div>
    <!-- 下拉框导航 -->
    <div v-if="isMobile && isOpend" class="toggle-list">
      <ul>
        <li v-for="(menu, key) in menus">
          <div v-if="menu.url" class="toggle-list__item" @click="handlerClickToggle(menu, key)">
            <router-link :to="menu.url" v-if="!menu.navs">{{menu.name}}</router-link>
            <span v-if="menu.navs">{{menu.name}}</span>
            <span class="iconfont" :class="activeKey===key ? 'icon-toggle' : 'icon-toggle-topshow'" v-if="menu.navs"></span>
          </div>
          <div class="toggle-div" v-if="activeKey===key && menu.navs">
            <ul>
              <li v-for="(nav, index) in menu.navs">
                <div v-if="menu.url" class="toggle-list__item" @click="handlerClickToggle(menu, key, true)">
                  <router-link :to="menu.url">{{nav}}</router-link>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['isIndex', 'openedIndex'],
    name: 'YMenu',
    data () {
      return {
        activeKey: null, // 点击的导航位置
        isOpend: false,
        isMobile: this.$store.state.isMobile,
        menuActive: false,
        menuOpen: false,
        menus: [
          { name: '首页', url: '/' },
          { name: '产品中心', url: '/product' },
          { name: '方案中心', url: '/solution', showNav: true, navs: ['聚焦教育', '聚焦科技'] },
          { name: '视频直播间', url: '/live' },
          { name: '案例展示', url: '/case', showNav: true, navs: ['聚焦教育', '聚焦科技'] },
          { name: '关于玮航', url: '/about', showNav: true, navs: ['公司介绍', '新闻中心', '招贤纳士'] }
        ],
        globalShowNav: true
      }
    },
    methods: {
      test (navIdx) {
        this.$emit('navClick', navIdx)
      },
      /**
       * 全屏菜单动效
       * @param {String} value true:打开 false:关闭
       */
      changeState (value) {
        this.globalShowNav = true
        // this.openedIndex = value
        // this.menuOpen = value
        // const wrapper = document.querySelector('#bigMenuWrapper')
        // const lis = document.querySelectorAll('.menu-level0')
        // // const lis1 = document.querySelectorAll('.menu-level1')
        // // console.log(lis1)
        // const closeState = {
        //   opacity: 0,
        //   scale: 0.8
        // }
        // const openState = {
        //   opacity: 1,
        //   scale: 1
        // }
        // if (this.menuOpen) {
        //   wrapper.style.display = 'table'
        //   TweenMax.fromTo(wrapper, 0.2, closeState, openState)
        //   lis.forEach((li, index) => {
        //     setTimeout(() => {
        //       TweenMax.fromTo(li, 0.8, closeState, openState)
        //     }, 150 * (index + 1))
        //   })
        // } else {
        //   TweenMax.fromTo(wrapper, 0.2, openState, closeState)
        //   lis.forEach(li => {
        //     TweenMax.fromTo(li, 0.8, openState, closeState)
        //   })
        //   setTimeout(() => {
        //     wrapper.style.display = 'none'
        //   }, 200)
        // }
      },
      showSub () {
        this.$nextTick(function () {
          const lis = document.querySelectorAll('.menu-level1')
          const closeState = {
            opacity: 0,
            scale: 0.8
          }
          const openState = {
            opacity: 1,
            scale: 1
          }
          lis.forEach((li, index) => {
            setTimeout(() => {
              TweenMax.fromTo(li, 0.8, closeState, openState)
            }, 150 * (index + 1))
          })
        })
      },
      showToggleMenu () {
        this.isOpend = !this.isOpend
      },
      // 处理点击跳转
      handlerClickToggle (menu, key, isNav) {
        if (!isNav) {
          this.activeKey = this.activeKey === key ? null : key
        }
        if (!menu.navs || isNav) {
          this.$router.push({ path: menu.url })
          this.isOpend = false
        }
      }
    },
    mounted () {
      document.addEventListener('scroll', () => {
        const scrollTop = (window.pageYOffset !== undefined)
                          ? window.pageYOffset
                          : (document.documentElement || document.body.parentNode || document.body).scrollTop
        this.menuActive = scrollTop > 0
      })
      const that = this
      document.addEventListener('click', () => {
        that.globalShowNav = false
      })
    }
  }
</script>
<style lang="scss" scoped>
@import "~@/styles/var";
@import "~@/styles/mixin";


.fixed {
  position: fixed;
  right: 30px;
  z-index: 10;
}

.y-menu {
  padding: 0 $nav-main-padding;
  position: absolute;
  top: 0px;
  width: 100%;
  height: $nav-main-height;
  line-height: 70px;
  z-index: 1000;
  background: #fff;
  &__bar {
    width: 960px;
    margin: auto;
  }
  &__text {
    font-size: 16px;
    position: relative;
    margin-right: 40px;
    a {
      color: #000000;
    }
  }
  .color-white {
    a {
      color: #fff;
    }
  }
  .first-text:after {
    left: -20px !important;
  }
  .current:after {
    content: '';
    bottom: -20px;
    left: -15%;
    position: absolute;
    width: 130%;
    min-width: 72px;
    height: 4px;
    background-image: linear-gradient(-90deg, #18C7F9 0%, #0A96F0 100%);
  }
  .current-white:after {
    content: '';
    bottom: -20px;
    left: -15%;
    position: absolute;
    width: 130%;
    min-width: 72px;
    height: 4px;
    background: #fff;
  }
  &__all {
    position: fixed;
    top: 0;
    left: 0;
    height: 0;
    background: blue;
    width: 100%;
    height: 100%;
    transform: scale(0);
    text-align: center;
    color: $color-white;
    display: table;
    text-align: center;
    overflow-y: auto;
    &--wrapper {
      display: table-cell;
      vertical-align: middle;
    }
  }
  &__logo {
    display: inline-block;
    margin-right: 65px;
    .icon {
      color: $color-white;
      width: 80px;
      height: 80px;
    }
    .blue {
      color: #083CCA;
    }
  }
  .menu {
    &-level0 {
      cursor: pointer;
      font-size: $font-size-menu;
      margin-top: 40px;
      opacity: 0;
    }
    &-level1 {
      font-size: $font-size-menu-sub;
      margin-top: 30px;
      opacity: 0;
    }
  }
  .nav-div {
    width: 130%;
    height: auto;
    background: #fff;
    position: absolute;
    left: -15%;
    min-width: 72px;
    box-shadow: 0 2px 8px 0 #18C7F9;
    border-radius: 4px;
    hr {
      margin: 0px 4px;
    }
    span {
      display: block;
      height: 45px;
      line-height: 45px;
      text-align: center;
      font-size: 16px;
      color: #000000;
      cursor: pointer;
    }
    span:hover {
      color: #0a96f0;
    }
  }
}
#mobile {
  .y-menu {
    padding-right: 1.5rem;
    padding-left: 1rem;
    padding-top: 0.966667rem;
    height: 3.8rem;
    line-height: 35px;
    &__bar-mobile {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__logo-mobile {
      img {
        margin-top: 0;
      }
    }
    &__toggle {
      font-size: 2rem;
      color: #0A96F0;
    }
    .toggle-list {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      background-color: white;
      &__item {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 0.033333rem solid #c0c0c0;
        .icon-toggle-topshow {
          color: #c0c0c0;
          font-size: 1rem;
        }
        .icon-toggle {
          color: #c0c0c0;
          font-size: 1rem;
        }
      }
    }
    .toggle-div {
      background-color: #d7d7d7;
      &__item {
        border-bottom: 0.033333rem solid #c0c0c0;
      }
    }
  }
}
</style>
