import TTable from './src/TTable.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

const componentsPC = ['Table','TableColumn','Pagination','Icon']
const componentsH5 = ['Table','TableColumn']

TTable.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
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
  else if(apptype === 'H5'){
    componentsH5.forEach((item)=>{
      const uiItem = require('element-ui')[item]
      if(uiItem.name.indexOf('van')> -1)
          require(`vant/lib/${uiItem.name.replace('van-','')}/style`);
      if(uiItem.name.indexOf('El')> -1){
          let name = uiItem.name.replace(/([A-Z])/g,"-$1").toLowerCase().replace('-el-','');
          require(`element-ui/lib/theme-chalk/${name}.css`);
        }
      Vue.component(uiItem.name,uiItem)
    })
    Vue.component('van-pagination',function(resolve){
      require(['vant/lib/pagination','vant/lib/pagination/style'],resolve)
    })
  }

  Vue.component(TTable.name, TTable);
};
// TTable._components = {
//   'PC':[...componentsPC,TTable],
//   'H5':[...componentsH5,TTable],
// }
export default TTable

