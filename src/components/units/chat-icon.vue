<template>
  <div class="u-logo__menu">
    <button type="button" role="button"
      aria-label="Toggle Navigation"
      class="x2 lines-button arrow arrow-left"
      :class="{open: this.open}"
    >
      <span class="lines"></span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'YChatIcon',
    props: ['open'],
    data () {
      return {}
    },
    mounted () {
    }
  }
</script>
<style lang="scss" scoped>
@import "~@/styles/var";
@import "~@/styles/mixin";

$menu-width:32px;

.menu-btn--fixed {
/*  position: fixed !important;
  right: $nav-main-padding;
  top: 10px;*/
}
.u-logo__menu {
  display: inline-block;
  position: relative;
  cursor: pointer;
  z-index: 10;
  height: 80px;
  &--item {
    display: block;
    width: 100%;
    height: 4px;
    background-color: $color-white;
    border-radius: 4px;
    position: absolute;
    &:first-child {
      top: 0;
    }
    &:nth-child(2) {
      top: 10px;
    }
    &:nth-child(3) {
      top: 20px;
    }
  }
}

.lines-button {
  transition: .3s;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  /* */
}
.lines-button:hover {
  opacity: 1;
}
.lines-button:active {
  transition: 0;
}

.lines {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #083CCA;
  border-radius: 50%;
  transition: 0.2s;
  position: relative;
  top: 1px
}
.lines:before, .lines:after {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #083CCA;
  border-radius: 50%;
  transition: 0.2s;
  position: absolute;
  content: '';
  -webkit-transform-origin: 0.28571rem center;
  transform-origin: 0.28571rem center;
}
.lines:before {
  right: .6rem;
}
.lines:after {
  left: .6rem;
}


.lines-button.open {
  -webkit-transform: scale3d(0.8, 0.8, 0.8);
  transform: scale3d(0.8, 0.8, 0.8);
}

.lines-button.arrow.open .lines:before, .lines-button.arrow.open .lines:after{
  left: -.88rem;
  border-radius: 0.28571rem;
  height: 4px;
}
.lines-button.arrow.open .lines:before {
  -webkit-transform: rotate3d(0, 0, 1, 40deg);
  transform: rotate3d(0, 0, 1, 40deg);
}
.lines-button.arrow.open .lines:after {
  -webkit-transform: rotate3d(0, 0, 1, -40deg);
  transform: rotate3d(0, 0, 1, -40deg);
}

.lines-button.arrow-up.open {
  -webkit-transform: scale3d(0.8, 0.8, 0.8) rotate3d(0, 0, 1, 90deg);
  transform: scale3d(0.8, 0.8, 0.8) rotate3d(0, 0, 1, 90deg);
}

.lines-button.minus.open .lines:before, .lines-button.minus.open .lines:after {
  -webkit-transform: none;
  transform: none;
  top: 0;
  width: $menu-width;
}

.lines-button.x.open .lines {
  background: transparent;
}
.lines-button.x.open .lines:before, .lines-button.x.open .lines:after {
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  top: 0;
  width: $menu-width;
}
.lines-button.x.open .lines:before {
  -webkit-transform: rotate3d(0, 0, 1, 45deg);
  transform: rotate3d(0, 0, 1, 45deg);
}
.lines-button.x.open .lines:after {
  -webkit-transform: rotate3d(0, 0, 1, -45deg);
  transform: rotate3d(0, 0, 1, -45deg);
}

.lines-button.x2 .lines {
  transition: background 0.2s 0.3s ease;
}
.lines-button.x2 .lines:before, .lines-button.x2 .lines:after {
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  transition: top 0.2s 0.6s ease, -webkit-transform 0.2s ease;
  transition: top 0.2s 0.6s ease, transform 0.2s ease;
}

.lines-button.x2.open .lines {
  transition: background 0.2s 0s ease;
  background: transparent;
}
.lines-button.x2.open .lines:before, .lines-button.x2.open .lines:after {
  transition: top 0.2s ease, -webkit-transform 0.2s 0.3s ease;
  transition: top 0.2s ease, transform 0.2s 0.3s ease;
  top: 0;
  width: $menu-width + 4px;
}
.lines-button.x2.open .lines:before {
  -webkit-transform: rotate3d(0, 0, 1, 45deg);
  transform: rotate3d(0, 0, 1, 45deg);
}
.lines-button.x2.open .lines:after {
  -webkit-transform: rotate3d(0, 0, 1, -45deg);
  transform: rotate3d(0, 0, 1, -45deg);
}
#mobile {
  .lines {
    &, &:before, &:after, &.x2.open, &-button {
      width: 2rem;
      height: .2rem;
      border-radius: 0;
    }
    &-button {
      padding: 0;
      vertical-align: middle;
    }
    &:before {
      top: .6rem;
    }
    &:after {
      top: -.6rem;
    }
    &:before, &:after {

    }
    &-button {
      margin-top: -1.4rem;
    }
  }
  .open {
    margin-right: -.4rem;
    .lines {
      &:before {
        top: 0;
      }
      &:after {
        top: 0;
      }
    }
  }
}
</style>
