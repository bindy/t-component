import TSwitch from './src/TSwitch.vue';
import {DeviceInstance } from '../utils'
import config from '../config'


TSwitch.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    const tswitch =  (await import('element-ui/packages/switch')).default
    await import('element-ui/lib/theme-chalk/switch.css')
    Vue.component(tswitch.name,tswitch)
  }
  else if(apptype === 'H5'){
    const tswitch =  (await import('vant/lib/switch')).default
    await import('vant/lib/switch/style')
    Vue.component(tswitch.name,tswitch)
  }

  Vue.component(TSwitch.name, TSwitch);
};
// TSwitch._components = {
//   'PC':[...componentsPC,TSwitch],
//   'H5':[...componentsH5,TSwitch],
// }
export default TSwitch

