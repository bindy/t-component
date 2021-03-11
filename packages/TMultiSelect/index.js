import TMultiSelect from './src/TMultiSelect.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

const componentsPC = ['Option']
const componentsH5 = ['Popup','Tag','Search','CheckboxGroup',
'CellGroup','Cell','Checkbox','TreeSelect']

TMultiSelect.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'H5'){
    componentsH5.forEach((item)=>{
      const uiItem = require('vant')[item]
      if(uiItem.name.indexOf('van')> -1)
          require(`vant/lib/${uiItem.name.replace('van-','')}/style`);
      if(uiItem.name.indexOf('El')> -1){
          let name = uiItem.name.replace(/([A-Z])/g,"-$1").toLowerCase().replace('-el-','');
          require(`element-ui/lib/theme-chalk/${name}.css`);
        }
      Vue.component(uiItem.name,uiItem)
    })
  }else if(apptype === 'PC'){
    componentsPC.forEach((item)=>{
      const uiItem = require('element-ui')[item]
      if(uiItem.name.indexOf('van')> -1)
          require(`vant/lib/${uiItem.name.replace('van-','')}/style`);
      if(uiItem.name.indexOf('El')> -1){
          let name = uiItem.name.replace(/([A-Z])/g,"-$1").toLowerCase().replace('-el-','');
          require(`element-ui/lib/theme-chalk/${name}.css`);
        }
      Vue.component(uiItem.name,uiItem)
    })
  }  

  Vue.component(TMultiSelect.name, TMultiSelect);
};
// TMultiSelect._components = {
//   'PC':[...componentsPC,TMultiSelect],
//   'H5':[...componentsH5,TMultiSelect],
// }
export default TMultiSelect

