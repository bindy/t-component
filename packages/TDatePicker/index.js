import TDatePicker from './src/TDatePicker.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

let componentsPC = [require('element-ui').DatePicker]
let componentsH5 = [require('vant').Calendar]

TDatePicker.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  let components
  if(apptype === 'H5'){
    components = componentsH5
  }else if(apptype === 'PC'){
    components = componentsPC
  }
  components.forEach((item)=>{
    if(item.name.indexOf('van')> -1)
        require(`vant/lib/${item.name.replace('van-','')}/style`);
    if(item.name.indexOf('El')> -1){
        let name = item.name.replace(/([A-Z])/g,"-$1").toLowerCase().replace('-el-','');
        require(`element-ui/lib/theme-chalk/${name}.css`);
      }
    Vue.component(item.name,item)
  })
  Vue.component(TDatePicker.name, TDatePicker);
};
TDatePicker._components = {
  'PC':[...componentsPC,TDatePicker],
  'H5':[...componentsH5,TDatePicker],
}
export default TDatePicker

