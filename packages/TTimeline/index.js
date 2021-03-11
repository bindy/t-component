import TTimeline from './src/TTimeline.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TTimeline.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    Vue.component('ElTimeline',function(resolve){
      require(['element-ui/packages/timeline','element-ui/lib/theme-chalk/timeline.css'],resolve)
    })
  }
  else if(apptype === 'H5'){
    Vue.component('van-steps',function(resolve){
      require(['vant/lib/steps','vant/lib/steps/style'],resolve)
    })
  }

  Vue.component(TTimeline.name, TTimeline);
};
// TTimeline._components = {
//   'PC':[...componentsPC,TTimeline],
//   'H5':[...componentsH5,TTimeline],
// }
export default TTimeline

