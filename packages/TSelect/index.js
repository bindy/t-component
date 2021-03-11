import TSelect from './src/TSelect.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

const componentsPC = ['Select','Option','Cascader']
const componentsH5 = ['Popup','Picker','Icon']

TSelect.install = function(Vue) {
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

  Vue.component(TSelect.name, TSelect);
};
// TSelect._components = {
//   'PC':[...componentsPC,TSelect],
//   'H5':[...componentsH5,TSelect],
// }
export default TSelect

