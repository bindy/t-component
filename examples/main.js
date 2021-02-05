import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@vant/touch-emulator';
import './styleguide/style.css'
import {
  TButton,
  TCol,
  TRow,
  TCollapse,
  TCollapseItem,
  TDatePicker,
  TForm,
  TFormItem,
  TIcon,
  TImage,
  TList,
  TMultiSelect,
  TRadio,
  TRadioGroup,
  TSelect,
  TSwitch,
  TTable,
  TTimeline,
  TTimelineItem,
  TAlert,
  TConfirm,
  TLoading
} from '../packages'

Vue.config.productionTip = false
Vue.prototype.apptype = 'H5'
const components = [TButton,
  TCol,
  TRow,
  TCollapse,
  TCollapseItem,
  TDatePicker,
  TForm,
  TFormItem,
  TIcon,
  TImage,
  TList,
  TMultiSelect,
  TRadio,
  TRadioGroup,
  TSelect,
  TSwitch,
  TTable,
  TTimeline,
  TTimelineItem];

components.forEach((item) => Vue.use(item))
Vue.prototype.$TAlert = TAlert
Vue.prototype.$TConfirm = TConfirm
Vue.prototype.$TLoading = TLoading

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

