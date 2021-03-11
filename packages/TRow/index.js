import TRow from './src/TRow.vue';
import {DeviceInstance } from '../utils'
import config from '../config'


TRow.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    Vue.component('ElRow',function(resolve){
      require(['element-ui/packages/row','element-ui/lib/theme-chalk/row.css'],resolve)
    })
  }
  else if(apptype === 'H5'){
    Vue.component('van-row',function(resolve){
      require(['vant/lib/row','vant/lib/row/style'],resolve)
    })
  }

  Vue.component(TRow.name, TRow);
};
// TRow._components = {
//   'PC':[...componentsPC,TRow],
//   'H5':[...componentsH5,TRow],
// }
export default TRow

