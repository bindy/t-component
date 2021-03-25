import TImage from './src/TImage.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TImage.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  
  if(apptype === 'PC'){
    const image =  (await import('element-ui/packages/image')).default
    await import('element-ui/lib/theme-chalk/image.css')
    Vue.component(image.name,image)
  }
  else if(apptype === 'H5'){
    const image =  (await import('vant/lib/image')).default
    await import('vant/lib/image/style')
    Vue.component(image.name,image)
  }
 
  Vue.component(TImage.name, TImage);
};
// TImage._components = {
//   'PC':[...componentsPC,TImage],
//   'H5':[...componentsH5,TImage],
// }
export default TImage

