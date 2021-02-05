import TTable from './src/TTable.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

const componentsPC = [require('element-ui').Table,require('element-ui').TableColumn,require('element-ui').Pagination]
const componentsH5 = [require('element-ui').Table,require('element-ui').TableColumn,require('vant').Pagination]

TTable.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  let components
  if(apptype === 'H5'){
    components = componentsH5
  }else if(apptype === 'PC'){
    components = componentsPC
  }

  components.forEach((item)=>{
    if(item.name.indexOf('van')> -1)
        require(`vant/lib/${item.name.replace('van-','')}/style`);
    if(item.name.indexOf('El')> -1){
        let name = item.name.replace(/([A-Z])/g,"-$1").toLowerCase().replace('-el-','');
        require(`element-ui/lib/theme-chalk/${name}.css`);
      }
    Vue.component(item.name,item)
  })
  Vue.component(TTable.name, TTable);
};
TTable._components = {
  'PC':[...componentsPC,TTable],
  'H5':[...componentsH5,TTable],
}
export default TTable

