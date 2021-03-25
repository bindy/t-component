import TRow from './src/TRow.vue';
import {DeviceInstance } from '../utils'
import config from '../config'


TRow.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    const row =  (await import('element-ui/packages/row')).default
    await import('element-ui/lib/theme-chalk/row.css')
    Vue.component(row.name,row)
  }
  else if(apptype === 'H5'){
    const row =  (await import('vant/lib/row')).default
    await import('vant/lib/row/style')
    Vue.component(row.name,row)
  }

  Vue.component(TRow.name, TRow);
};
// TRow._components = {
//   'PC':[...componentsPC,TRow],
//   'H5':[...componentsH5,TRow],
// }
export default TRow

