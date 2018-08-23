import YCardSwitch from './card-switch.vue'
import YCardReports from './card-reports.vue'
import YCardDialog from './card-dialog.vue'

const YCards = {}
YCards.install = Vue => {
  Vue.component(YCardSwitch.name, YCardSwitch)
  Vue.component(YCardReports.name, YCardReports)
  Vue.component(YCardDialog.name, YCardDialog)
}
export default YCards
