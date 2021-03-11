import TButton from './src/TButton.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TButton.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType() 
  Vue.prototype.apptype = apptype
  if(apptype === 'PC'){
    Vue.component('ElButton',function(resolve){
      require(['element-ui/packages/button','element-ui/lib/theme-chalk/button.css'],resolve)
    })
  }
  else if(apptype === 'H5'){
    Vue.component('van-button',function(resolve){
      require(['vant/lib/button','vant/lib/button/style'],resolve)
    })
  }
  Vue.component(TButton.name, TButton);
};
// TButton._components = {
//   'PC':[...componentsPC,TButton],
//   'H5':[...componentsH5,TButton],
// }
export default TButton;

