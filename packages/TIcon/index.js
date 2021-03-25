import TIcon from './src/TIcon.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TIcon.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    const icon =  (await import('element-ui/packages/icon')).default
    await import('element-ui/lib/theme-chalk/icon.css')
    Vue.component(icon.name,icon)
  }
  else if(apptype === 'H5'){
    const icon =  (await import('vant/lib/icon')).default
    await import('vant/lib/icon/style')
    Vue.component(icon.name,icon)
  }

  Vue.component(TIcon.name, TIcon);
};
// TIcon._components = {
//   'PC':[...componentsPC,TIcon],
//   'H5':[...componentsH5,TIcon],
// }
export default TIcon

