import TRadioGroup from './src/TRadioGroup.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TRadioGroup.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  
  if(apptype === 'PC'){
    const tradiogroup =  (await import('element-ui/packages/radio-group')).default
    await import('element-ui/lib/theme-chalk/radio-group.css')
    Vue.component(tradiogroup.name,tradiogroup)
  }
  else if(apptype === 'H5'){
    const tradiogroup =  (await import('vant/lib/radio-group')).default
    await import('vant/lib/radio-group/style')
    Vue.component(tradiogroup.name,tradiogroup)
  }

  Vue.component(TRadioGroup.name, TRadioGroup);
};
// TRadioGroup._components = {
//   'PC':[...componentsPC,TRadioGroup],
//   'H5':[...componentsH5,TRadioGroup],
// }
export default TRadioGroup

