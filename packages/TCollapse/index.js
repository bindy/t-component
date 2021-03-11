import TCollapse from './src/TCollapse.vue';
import {DeviceInstance } from '../utils'
import config from '../config'


TCollapse.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'H5'){
    const Collapse = require('vant').Collapse
    Vue.component(Collapse.name,Collapse)
    require('vant/lib/collapse/style')
  }else if(apptype === 'PC'){
    const Collapse = require('element-ui').Collapse
    Vue.component(Collapse.name,Collapse)
    require('element-ui/lib/theme-chalk/collapse.css')
  }

  Vue.component(TCollapse.name, TCollapse);
};
// TCollapse._components = {
//   'PC':[...componentsPC,TCollapse],
//   'H5':[...componentsH5,TCollapse],
// }
export default TCollapse

