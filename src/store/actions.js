import * as types from './mutation-types'

export default {

  /**
   * 检测浏览器当前左右滚动
   * @description 只有在 PC 浏览器才会用到当前检测，因为 PC 元素设置为 position:fixed 时
   * 屏幕缩小横向滚动不会显示被裁切的内容
   */
  detectScrollOffset ({ state, commit }) {
    window.addEventListener('scroll', () => {
      setTimeout(() => {
        let offset = document.body.scrollLeft || document.documentElement.scrollLeft
        commit(types.BODY_OFFSET_LEFT, offset)
      }, 0)
    })
  }
}
