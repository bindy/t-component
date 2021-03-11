import TCollapseItem from './src/TCollapseItem.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TCollapseItem.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'H5'){
    const CollapseItem = require('vant').CollapseItem
    Vue.component(CollapseItem.name,CollapseItem)
    require('vant/lib/collapse-item/style')
  }else if(apptype === 'PC'){
    const CollapseItem = require('element-ui').CollapseItem
    Vue.component(CollapseItem.name,CollapseItem)
    require('element-ui/lib/theme-chalk/collapse-item.css')
  }
  Vue.component(TCollapseItem.name, TCollapseItem);
};
// TCollapseItem._components = {
//   'PC':[...componentsPC,TCollapseItem],
//   'H5':[...componentsH5,TCollapseItem],
// }
export default TCollapseItem

