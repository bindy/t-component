import TCol from './src/TCol.vue';
import { DeviceInstance } from '../utils'
import config from '../config'

TCol.install = function (Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    Vue.component('ElCol',function(resolve){
      require(['element-ui/packages/col','element-ui/lib/theme-chalk/col.css'],resolve)
    })
  }
  else if(apptype === 'H5'){
    Vue.component('van-col',function(resolve){
      require(['vant/lib/col','vant/lib/col/style'],resolve)
    })
  }

  Vue.component(TCol.name, TCol);
};
// TCol._components = {
//   'PC':[...componentsPC,TCol],
//   'H5':[...componentsH5,TCol],
// }
export default TCol

