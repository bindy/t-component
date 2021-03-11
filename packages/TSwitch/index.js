import TSwitch from './src/TSwitch.vue';
import {DeviceInstance } from '../utils'
import config from '../config'


TSwitch.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    Vue.component('ElSwitch',function(resolve){
      require(['element-ui/packages/switch','element-ui/lib/theme-chalk/switch.css'],resolve)
    })
  }
  else if(apptype === 'H5'){
    Vue.component('van-switch',function(resolve){
      require(['vant/lib/switch','vant/lib/switch/style'],resolve)
    })
  }

  Vue.component(TSwitch.name, TSwitch);
};
// TSwitch._components = {
//   'PC':[...componentsPC,TSwitch],
//   'H5':[...componentsH5,TSwitch],
// }
export default TSwitch

