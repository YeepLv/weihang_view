<template>
  <div
    class="m-topbar"
    :class="{
      fixedbar: fix,
      'small-gap': gap === 'small'
    }"
    :style="{
      minWidth: isMobile ? '100%' : '1280px',
      left: fix && !isMobile ? `-${bodyOffsetLeft}px` : 0
    }">
    <div class="m-topbar__wrap">
      <span @click="handleSelect(index)" v-for="(item, index) in data" :class="{active: selectedIndex === index}" class="link">
        <a :href="item.url" v-if="type === 'scroll'">{{item.name}}</a>
        <router-link :to="item.url" v-if="(type!=='scroll' && item.url)">{{item.name}}</router-link>
        <a v-if="!item.url">{{item.name}}</a>
      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'YFixedbar',
  props: ['data', 'pos', 'initIndex', 'end', 'gap', 'type', 'scroll'],
  data () {
    return {
      fix: false,
      selectedIndex: this.initIndex || 0
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'isMobile',
      bodyOffsetLeft: 'bodyOffsetLeft'
    })
  },
  methods: {
    handleSelect (index) {
      this.$emit('select', index)
      this.selectedIndex = index
      if (this.scroll) document.querySelector('html').scrollTop = this.pos
    }
  },
  mounted () {
    document.addEventListener('scroll', (e) => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let pos = this.pos
      if (this.isMobile) {
        pos -= 60
      }

      if (scrollTop >= pos) {
        this.fix = true
      } else {
        this.fix = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/var";
@import "~@/styles/mixin";

.m-topbar {
  height: 80px;
  line-height: 80px;
  box-shadow: $box-shadow-base;
  text-align: center;
  background-color: $color-white;
  position: absolute;
  width: 100%;
  .link {
    &:hover, &.active {
      color: $link-active-color;
    }
  }
  a {
    display: inline-block;
    padding: 0 50px;
    cursor: pointer;
    font-size: 24px;
  }
  &.fixedbar {
    position: fixed;
    top: 0;
    z-index: 10000;
  }
}
#mobile {
  .m-topbar {
    height: 4rem;
    line-height: 4rem;
    white-space: nowrap;
    a {
      font-size: 1.066667rem;
      padding: 0 1.666667rem;
    }
    &.small-gap {
      &__wrap {
        margin: 0 -.8rem;
      }
      a {
        padding: 0 .8rem;
        max-width: 6.666667rem;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    &.fixedbar {
      position: fixed;
      top: 60px;
      z-index: 888;
    }
  }
}
</style>
