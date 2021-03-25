import TTimeline from './src/TTimeline.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TTimeline.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  // if(apptype === 'PC'){
  //   Vue.component('ElTimeline',function(resolve){
  //     require(['element-ui/packages/timeline','element-ui/lib/theme-chalk/timeline.css'],resolve)
  //   })
  // }
  // else if(apptype === 'H5'){
  //   Vue.component('van-steps',function(resolve){
  //     require(['vant/lib/steps','vant/lib/steps/style'],resolve)
  //   })
  // }

  if(apptype === 'PC'){
    const timeline =  (await import('element-ui/packages/timeline')).default
    await import('element-ui/lib/theme-chalk/timeline.css')
    Vue.component(timeline.name,timeline)
  }
  else if(apptype === 'H5'){
    const steps =  (await import('vant/lib/steps')).default
    await import('vant/lib/steps/style')
    Vue.component(steps.name,steps)
  }

  Vue.component(TTimeline.name, TTimeline);
};
// TTimeline._components = {
//   'PC':[...componentsPC,TTimeline],
//   'H5':[...componentsH5,TTimeline],
// }
export default TTimeline

