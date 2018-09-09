

<template>
	<div class="mobile-submenu">
		<div class="mobile-submenu__title" @click.stop="titleClicked = !titleClicked">
			<span>
				<span>{{currentTab}}</span>
				<svg class="icon" aria-hidden="true">
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
      this.chosenIndex = index
      this.currentTab = tab
      this.titleClicked = false
      this.$emit('tabChanged', index)
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
		}
		& > span > svg {
			position: absolute;
			right: -30px;
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
