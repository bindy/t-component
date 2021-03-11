import TImage from './src/TImage.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TImage.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    Vue.component('ElImage',function(resolve){
      require(['element-ui/packages/image','element-ui/lib/theme-chalk/image.css'],resolve)
    })
  }
  else if(apptype === 'H5'){
    Vue.component('van-image',function(resolve){
      require(['vant/lib/image','vant/lib/image/style'],resolve)
    })
  }
 
  Vue.component(TImage.name, TImage);
};
// TImage._components = {
//   'PC':[...componentsPC,TImage],
//   'H5':[...componentsH5,TImage],
// }
export default TImage

