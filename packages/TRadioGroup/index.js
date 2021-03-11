import TRadioGroup from './src/TRadioGroup.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TRadioGroup.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    Vue.component('ElRadioGroup',function(resolve){
      require(['element-ui/packages/radio-group','element-ui/lib/theme-chalk/radio-group.css'],resolve)
    })
  }
  else if(apptype === 'H5'){
    Vue.component('van-radio-group',function(resolve){
      require(['vant/lib/radio-group','vant/lib/radio-group/style'],resolve)
    })
  }

  Vue.component(TRadioGroup.name, TRadioGroup);
};
// TRadioGroup._components = {
//   'PC':[...componentsPC,TRadioGroup],
//   'H5':[...componentsH5,TRadioGroup],
// }
export default TRadioGroup

