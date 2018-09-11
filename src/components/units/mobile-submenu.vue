

<template>
	<div class="mobile-submenu">
		<div class="mobile-submenu__title" @click.stop="titleClicked = !titleClicked">
			<span>
				<span ref="currenttab">{{currentTab}}</span>
				<svg ref="currenttabsvg" class="icon" aria-hidden="true" style="right: -30px;">
					<use xlink:href="#icon-xiala"></use>
				</svg>
			</span>
		</div>
		<ul v-show="titleClicked">
			<li v-for="(tab, index) in tabList" :key="index" :class="{'active': index === chosenIndex}" @click="clickTab(tab, index)">{{tab}}</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'YMobileSubmenu',
  props: ['tabList', 'tabIndex'],
  data () {
    return {
      titleClicked: false,
      chosenIndex: 0,
      currentTab: ''
    }
  },
  mounted () {
    this.currentTab = this.tabList[this.tabIndex || 0]
    const that = this
    document.addEventListener('click', function () {
      that.titleClicked = false
    })
  },
  watch: {
    tabIndex () {
      this.currentTab = this.tabList[this.tabIndex || 0]
    }
  },
  methods: {
    clickTab (tab, index) {
      const oldWidth = this.$refs['currenttab'].offsetWidth
      this.chosenIndex = index
      this.currentTab = tab
      this.titleClicked = false
      this.$emit('tabChanged', index)
      this.$nextTick(function () {
        const newWidth = this.$refs['currenttab'].offsetWidth
        const right = +(this.$refs['currenttabsvg'].style.right).split('px')[0]
        let newRight = right - (newWidth - oldWidth) / 2
        if (newRight > -30) {
          newRight = -30
        }
        console.log(newRight)
        this.$refs['currenttabsvg'].style.right = `${newRight}px`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-submenu {
	height: 40px;
	width: 100%;
	background: #F6F6F6;
	border-top: 1px solid #666666;
	border-bottom: 1px solid #666666;

	&__title {
		height: 100%;
		text-align: center;
		line-height: 40px;
		color: #666666;

		& > span {
			position: relative;
			width: auto;

			& > span {
				display: inline-block;
			}
		}
		& > span > svg {
			position: absolute;
			width: 25px;
			height: 25px;
			top: -1px;
		}
	}
	ul {
		text-align: center;
		position: relative;
    z-index: 2;
		background: #F6F6F6;
		border-bottom: 1px solid #666666;
	}
	li {
		line-height: 40px;
		border-top: 1px solid #666666;
	}
	.active {
		color: #0a96f0
	}
}
</style>
