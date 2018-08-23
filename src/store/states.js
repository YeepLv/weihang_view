const winWidth = window.screen.width
const isMobile = winWidth <= 1024

export default {
  isMobile,
  screenWidth: winWidth,
  hasTrial: false,

  bodyOffsetLeft: 0 // 当前浏览器横向滚动距离
}
