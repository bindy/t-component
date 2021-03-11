import TIcon from './src/TIcon.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TIcon.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    Vue.component('ElIcon',function(resolve){
      require(['element-ui/packages/icon','element-ui/lib/theme-chalk/icon.css'],resolve)
    })
  }
  else if(apptype === 'H5'){
    Vue.component('van-icon',function(resolve){
      require(['vant/lib/icon','vant/lib/icon/style'],resolve)
    })
  }

  Vue.component(TIcon.name, TIcon);
};
// TIcon._components = {
//   'PC':[...componentsPC,TIcon],
//   'H5':[...componentsH5,TIcon],
// }
export default TIcon

