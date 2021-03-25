import TDatePicker from './src/TDatePicker.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TDatePicker.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()

  if(apptype === 'PC'){
    // const DatePicker =  (await import('element-ui/packages/date-picker')).default
    // DatePicker 暂时无法实现按需
    const DatePicker = require('element-ui').DatePicker
    await import('element-ui/lib/theme-chalk/date-picker.css')
    Vue.component(DatePicker.name,DatePicker)
  }
  else if(apptype === 'H5'){
    const calendar =  (await import('vant/lib/calendar')).default
    await import('vant/lib/calendar/style')
    Vue.component(calendar.name,calendar)
  }
  Vue.component(TDatePicker.name, TDatePicker);
};
// TDatePicker._components = {
//   'PC':[...componentsPC,TDatePicker],
//   'H5':[...componentsH5,TDatePicker],
// }
export default TDatePicker

