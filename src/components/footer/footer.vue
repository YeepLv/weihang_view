<template>
  <div class="y-footer" :class="classObject">
    <div class="y-footer__wrap f-content__wrap">
      <div class="y-footer__about" v-if="!isMobile">
        <div class="y-footer__upper">
          <ul>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-footer-dianhua"></use>
              </svg>
              0755-26656317
            </li>
            <!-- <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-footer-shouji"></use>
              </svg>
              13632813578 (林经理)
            </li> -->
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-footer-youxiang"></use>
              </svg>
              whggyx@weihangtx.com
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-footer-dizhi"></use>
              </svg>
              深圳市南山区讯美科技广场1号楼6215
            </li>
          </ul>
          <img src="@/assets/qcode.png" alt="">
          <div style="clear:both"></div>
        </div>
        <div class="y-footer__lower">
          <p>Copyright &copy;2015-2018 深圳玮航教育科技有限公司 &nbsp;&nbsp;&nbsp; 粤ICP备18101917号</p>
        </div>
      </div>
      <div class="y-footer__copy" v-if="isMobile">
        <p>Copyright &copy;2015-2018 深圳玮航教育科技有限公司</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'YFooter',
    props: ['footerType'],
    data () {
      return {
        isMobile: this.$store.state.isMobile,
        showQcode: false
      }
    },
    computed: {
      classObject: function () {
        if (this.footerType === 0) {
          return 'footer-common'
        } else if (this.footerType === 1) {
          return 'footer-grey'
        }
        return 'footer-bg'
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '~@/styles/var';
  @import '~@/styles/mixin';
  $padding: 80px 0;
  .icon {
    &.zhihu {
      &:hover {
        color: $logo-active-zhihu;
      }
    }
    &.weixin {
      &:hover {
        color: $logo-active-weixin;
      }
    }
    &.weibo {
      &:hover {
        color: $logo-active-weibo;
      }
    }
  }
  .footer-common {
    background-image: url(~@/assets/footer.png);
  }
  .footer-grey {
    background-image: url(~@/assets/footer-grey.png);
  }
  .footer-bg {
    background-image: url(~@/assets/footer-bg.png);
  }
  .y-footer {
    background-color: $color-white;
    padding: $padding;
    height: 322px;
    p {
      line-height: 18px;
    }
    .qCode {
      position: relative;
      img {
        width: 200px;
        height: 200px;
        position: absolute;
        bottom: 30px;
        left: 0;
        margin-left: -75px;
      }
    }
    &__wrap {
      @include clearfix;
      width: 960px;
    }
    // &__lower {
    //   @include clearfix;
    // }
    &__upper {
      padding-bottom: 50px;
      border-bottom: 1px solid #fff;
    }
    &__contact, &__upper--contact, &__lower--contact {
      float: right;
      clear: right;
    }
    &__lower {
      @include clearfix;
      font-family: MicrosoftYaHei;
      font-size: 12px;
      color: #FFFFFF;
      text-align: center;
      padding-top: 30px;
    }
    &__about{
      ul {
        float: left;
      }
      li {
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 30px;
      }
      img {
        float: right;
      }
    }
  }
  #mobile .y-footer {
    text-align: center;
    padding: 2rem 0;
    &__contact {
      width: 100%;
    }
    .icon {
      height: 2rem;
      width: 4rem !important;
      margin-bottom: 1.2rem;
/*      &.zhihu {
        color: $logo-active-zhihu;
      }
      &.weixin {
        color: $logo-active-weixin;
      }
      &.weibo {
        color: $logo-active-weibo;
      }*/
      &.zhihu {
        height: 1.8rem !important;
        width: 2.5rem !important;
      }
    }
    p {
      line-height: 1.333333rem;
      margin-bottom: 1.333333rem;
    }
    &__copy {
      p {
        color: #999;
        font-size: .8rem;
      }
    }
  }
</style>
