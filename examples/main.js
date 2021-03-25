import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@vant/touch-emulator';
import './styleguide/style.css'

const TButton = require('../packages/TButton').default
const TCol = require('../packages/TCol').default
const TRow = require('../packages/TRow').default
const TCollapse = require('../packages/TCollapse').default
const TCollapseItem = require('../packages/TCollapseItem').default
const TDatePicker = require('../packages/TDatePicker').default
const TForm = require('../packages/TForm').default
const TFormItem = require('../packages/TFormItem').default
const TIcon = require('../packages/TIcon').default
const TImage = require('../packages/TImage').default
const TList = require('../packages/TList').default
const TMultiSelect = require('../packages/TMultiSelect').default
const TRadio = require('../packages/TRadio').default
const TRadioGroup = require('../packages/TRadioGroup').default
const TSelect = require('../packages/TSelect').default
const TSwitch = require('../packages/TSwitch').default
const TTable = require('../packages/TTable').default
const TTimeline = require('../packages/TTimeline').default
const TTimelineItem = require('../packages/TTimelineItem').default
const TAlert = require('../packages/TAlert')
const TConfirm = require('../packages/TConfirm')
const TLoading = require('../packages/TLoading')

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
  TTimelineItem
];
Promise.all(
components.map((item) => {
  return item.install(Vue)
}))
.then(()=>{
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
})
Vue.prototype.$TAlert = TAlert
Vue.prototype.$TConfirm = TConfirm
Vue.prototype.$TLoading = TLoading



