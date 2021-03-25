import TRadio from './src/TRadio.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TRadio.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
 
  if(apptype === 'PC'){
    const tradio =  (await import('element-ui/packages/radio')).default
    await import('element-ui/lib/theme-chalk/radio.css')
    Vue.component(tradio.name,tradio)
  }
  else if(apptype === 'H5'){
    const tradio =  (await import('vant/lib/radio')).default
    await import('vant/lib/radio/style')
    Vue.component(tradio.name,tradio)
  }

  Vue.component(TRadio.name, TRadio);
};
// TRadio._components = {
//   'PC':[...componentsPC,TRadio],
//   'H5':[...componentsH5,TRadio],
// };
export default TRadio

