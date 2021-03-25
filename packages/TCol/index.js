import TCol from './src/TCol.vue';
import { DeviceInstance } from '../utils'
import config from '../config'

TCol.install = async function (Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    const col =  (await import('element-ui/packages/col')).default
    await import('element-ui/lib/theme-chalk/col.css')
    Vue.component(col.name,col)
  }
  else if(apptype === 'H5'){
    const col =  (await import('vant/lib/col')).default
    await import('vant/lib/col/style')
    Vue.component(col.name,col)
  }

  Vue.component(TCol.name, TCol);
};
// TCol._components = {
//   'PC':[...componentsPC,TCol],
//   'H5':[...componentsH5,TCol],
// }
export default TCol

