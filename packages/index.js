/**
 * 全局注册组件，局部使用的组件请不要添加到全局组件中区
 */
import TButton from './TButton'
import TRow from './TRow'
import TCol from './TCol'
import TImage from './TImage'
import TRadio from './TRadio'
import TRadioGroup from './TRadioGroup'
import TFormItem from './TFormItem'
import TForm from './TForm'
import TSelect from './TSelect'
import TMultiSelect from './TMultiSelect'
import TDatePicker from './TDatePicker'
import TList from './TList'
import TTable from './TTable'
import TCollapse from './TCollapse'
import TCollapseItem from './TCollapseItem'
import TIcon from './TIcon'
import TTimeline from './TTimeline'
import TTimelineItem from './TTimelineItem'
import TSwitch from './TSwitch'
import TAlert from './TAlert'
import TConfirm from './TConfirm'
import TLoading from './TLoading'
// import { DeviceInstance } from './utils'
// import config from './config'
// const apptype = config['apptype'] || DeviceInstance().getType()
var version = '1.0.0';

// export default {
// const install = function (Vue) {
//   if (install.installed) return
//   let components = [
//     ...TButton._components[apptype],
//     ...TCol._components[apptype],
//     ...TRow._components[apptype],
//     ...TImage._components[apptype],
//     ...TRadioGroup._components[apptype],
//     ...TRadio._components[apptype],
//     ...TForm._components[apptype],
//     ...TFormItem._components[apptype],
//     ...TSelect._components[apptype],
//     ...TMultiSelect._components[apptype],
//     ...TDatePicker._components[apptype],
//     ...TList._components[apptype],
//     ...TTable._components[apptype],
//     ...TCollapse._components[apptype],
//     ...TCollapseItem._components[apptype],
//     ...TIcon._components[apptype],
//     ...TTimeline._components[apptype],
//     ...TTimelineItem._components[apptype],
//     ...TSwitch._components[apptype]

//   ]
//   if (apptype === 'H5') {
//     Vue.use(require("vant").lazyload);
//   }
//   components.forEach((item) => {
//     if (item.name)
//       Vue.component(item.name, item)
//     if (item.name.indexOf('van') > -1)
//       require(`vant/lib/${item.name.replace('van-', '')}/style`);
//     if (item.name.indexOf('El') > -1) {
//       const name = item.name.replace(/([A-Z])/g, "-$1").toLowerCase().replace('-el-', '');
//       require(`element-ui/lib/theme-chalk/${name}.css`);
//     }
    
//   })
//   Vue.prototype.$TAlert = TAlert
//   Vue.prototype.$TConfirm = TConfirm
//   Vue.prototype.$TLoading = TLoading
// }

/* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

export {
  // install, 
  version,
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
}
// export default {
//   version: version,
//   install: install
// }
