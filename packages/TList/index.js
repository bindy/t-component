import TList from './src/TList.vue';
import {DeviceInstance } from '../utils'
import config from '../config'
import TTable from '../TTable';
import CommonList from './src/CommonList'
// import {Table,TableColumn,Pagination,Link }  from 'element-ui'
// import {Row,Col,List,SwipeCell,Button,Cell,}  from 'vant'

const componentsPC = ['Table','TableColumn','Pagination','Link']
const componentsH5 = ['Row','Col','List','SwipeCell','Button','Cell']

TList.install = function(Vue) {
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
    Vue.component(CommonList.name,CommonList)
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
    Vue.component(TTable.name,TTable)

  }
  Vue.component(TList.name, TList);
};
// TList._components = {
//   'PC':[...componentsPC,TList],
//   'H5':[...componentsH5,TList],
// }
export default TList

