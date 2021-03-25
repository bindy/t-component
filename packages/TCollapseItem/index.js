import TCollapseItem from './src/TCollapseItem.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TCollapseItem.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  
  if(apptype === 'PC'){
    const tcollapseitem =  (await import('element-ui/packages/collapse-item')).default
    await import('element-ui/lib/theme-chalk/collapse-item.css')
    Vue.component(tcollapseitem.name,tcollapseitem)
  }
  else if(apptype === 'H5'){
    const tcollapseitem =  (await import('vant/lib/collapse-item')).default
    await import('vant/lib/collapse-item/style')
    Vue.component(tcollapseitem.name,tcollapseitem)
  }

  Vue.component(TCollapseItem.name, TCollapseItem);
};
// TCollapseItem._components = {
//   'PC':[...componentsPC,TCollapseItem],
//   'H5':[...componentsH5,TCollapseItem],
// }
export default TCollapseItem

