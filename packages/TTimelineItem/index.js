import TTimelineItem from './src/TTimelineItem.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TTimelineItem.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    const Tooltip = require('element-ui').Tooltip
    Vue.component(Tooltip.name,Tooltip)
    require('element-ui/lib/theme-chalk/tooltip.css')
  }
  else if(apptype === 'H5'){
    Vue.component('van-step',function(resolve){
      require(['vant/lib/step','vant/lib/step/style'],resolve)
    })
    Vue.component('van-action-sheet',function(resolve){
      require(['vant/lib/action-sheet','vant/lib/action-sheet/style'],resolve)
    })
    Vue.component('van-row',function(resolve){
      require(['vant/lib/row','vant/lib/row/style'],resolve)
    })
  }

  Vue.component(TTimelineItem.name, TTimelineItem);
};
// TTimelineItem._components = {
//   'PC':[...componentsPC,TTimelineItem],
//   'H5':[...componentsH5,TTimelineItem],
// }
export default TTimelineItem

