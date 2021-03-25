import TCollapse from './src/TCollapse.vue';
import {DeviceInstance } from '../utils'
import config from '../config'


TCollapse.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()

  if(apptype === 'PC'){
    const tcollapse =  (await import('element-ui/packages/collapse')).default
    await import('element-ui/lib/theme-chalk/collapse.css')
    Vue.component(tcollapse.name,tcollapse)
  }
  else if(apptype === 'H5'){
    const tcollapse =  (await import('vant/lib/collapse')).default
    await import('vant/lib/collapse/style')
    Vue.component(tcollapse.name,tcollapse)
  }

  Vue.component(TCollapse.name, TCollapse);
};
// TCollapse._components = {
//   'PC':[...componentsPC,TCollapse],
//   'H5':[...componentsH5,TCollapse],
// }
export default TCollapse

