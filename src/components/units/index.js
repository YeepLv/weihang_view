import YMenuIcon from './menu-icon'
import YChatIcon from './chat-icon'
import YFixedbar from './fixed-bar'
import YForm from './form'
import YBanner from './banner'
import YSectionCommon from './section-common'
import YFullPage from './fullpage'
import YMobileSubmenu from './mobile-submenu'

const YUnits = {}
YUnits.install = Vue => {
  Vue.component(YMenuIcon.name, YMenuIcon)
  Vue.component(YChatIcon.name, YChatIcon)
  Vue.component(YFixedbar.name, YFixedbar)
  Vue.component(YForm.name, YForm)
  Vue.component(YBanner.name, YBanner)
  Vue.component(YSectionCommon.name, YSectionCommon)
  Vue.component(YFullPage.name, YFullPage)
  Vue.component(YMobileSubmenu.name, YMobileSubmenu)
}
export default YUnits
