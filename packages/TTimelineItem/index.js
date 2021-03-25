import TTimelineItem from './src/TTimelineItem.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TTimelineItem.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()

  if(apptype === 'PC'){
    // const tooltip =  (await import('element-ui/packages/tooltip')).default
    // Tooltip暂时无法实现按需
    const Tooltip = require('element-ui').Tooltip
    await import('element-ui/lib/theme-chalk/tooltip.css')
    Vue.component(Tooltip.name,Tooltip)
    
  }else if(apptype === 'H5'){
    
    const step =  (await import('vant/lib/step')).default
    await import('vant/lib/step/style')
    Vue.component(step.name,step)

    const actionSheet =  (await import('vant/lib/action-sheet')).default
    await import('vant/lib/action-sheet/style')
    Vue.component(actionSheet.name,actionSheet)

    const row =  (await import('vant/lib/row')).default
    await import('vant/lib/row/style')
    Vue.component(row.name,row)

    const cell =  (await import('vant/lib/cell')).default
    await import('vant/lib/cell/style')
    Vue.component(cell.name,cell)
  }

  Vue.component(TTimelineItem.name, TTimelineItem);
};
// TTimelineItem._components = {
//   'PC':[...componentsPC,TTimelineItem],
//   'H5':[...componentsH5,TTimelineItem],
// }
export default TTimelineItem

