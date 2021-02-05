import TMultiSelect from './src/TMultiSelect.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

const componentsPC = [require('element-ui').Option]
const componentsH5 = [require('vant').Popup,require('vant').Tag,require('vant').Search,require('vant').CheckboxGroup,
require('vant').CellGroup,require('vant').Cell,require('vant').Checkbox,require('vant').TreeSelect]

TMultiSelect.install = function(Vue) {
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
  Vue.component(TMultiSelect.name, TMultiSelect);
};
TMultiSelect._components = {
  'PC':[...componentsPC,TMultiSelect],
  'H5':[...componentsH5,TMultiSelect],
}
export default TMultiSelect

