import TRadio from './src/TRadio.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TRadio.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    Vue.component('ElRadio',function(resolve){
      require(['element-ui/packages/radio','element-ui/lib/theme-chalk/radio.css'],resolve)
    })
  }
  else if(apptype === 'H5'){
    Vue.component('van-radio',function(resolve){
      require(['vant/lib/radio','vant/lib/radio/style'],resolve)
    })
  }

  Vue.component(TRadio.name, TRadio);
};
// TRadio._components = {
//   'PC':[...componentsPC,TRadio],
//   'H5':[...componentsH5,TRadio],
// };
export default TRadio

