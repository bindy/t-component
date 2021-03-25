import TButton from './src/TButton.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TButton.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType() 
  Vue.prototype.apptype = apptype
  if(apptype === 'PC'){
    const button =  (await import('element-ui/packages/button')).default
    await import('element-ui/lib/theme-chalk/button.css')
    Vue.component(button.name,button)
  }
  else if(apptype === 'H5'){
    const button =  (await import('vant/lib/button')).default
    await import('vant/lib/button/style')
    Vue.component(button.name,button)
  }
  Vue.component(TButton.name, TButton);
};
// TButton._components = {
//   'PC':[...componentsPC,TButton],
//   'H5':[...componentsH5,TButton],
// }
export default TButton;

