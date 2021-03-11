import TDatePicker from './src/TDatePicker.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TDatePicker.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'H5'){
    const Calendar = require('vant').Calendar
    Vue.component(Calendar.name,Calendar)
    require('vant/lib/calendar/style')
  }else if(apptype === 'PC'){
    const DatePicker = require('element-ui').DatePicker
    Vue.component(DatePicker.name,DatePicker)
    require('element-ui/lib/theme-chalk/date-picker.css')
  }
  Vue.component(TDatePicker.name, TDatePicker);
};
// TDatePicker._components = {
//   'PC':[...componentsPC,TDatePicker],
//   'H5':[...componentsH5,TDatePicker],
// }
export default TDatePicker

