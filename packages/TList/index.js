import TList from './src/TList.vue';
import {DeviceInstance } from '../utils'
import config from '../config'
import TTable from '../TTable';
let componentsPC = [...TTable._components['PC'],require('element-ui').Link]
let componentsH5 = [require('vant').Row,require('vant').Col,require('vant').List,require('vant').SwipeCell
,require('vant').Button,require('vant').Cell,require('./src/CommonList.vue').default]

TList.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  let components
  if(apptype === 'H5'){
    components = componentsH5
    Vue.use(require('vant').Lazyload)
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
  Vue.component(TList.name, TList);
};
TList._components = {
  'PC':[...componentsPC,TList],
  'H5':[...componentsH5,TList],
}
export default TList

