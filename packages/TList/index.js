import TList from './src/TList.vue';
import {DeviceInstance } from '../utils'
import config from '../config'
import TTable from '../TTable';
import CommonList from './src/CommonList'

const componentsPC = ['Table','TableColumn','Pagination']
// const componentsH5 = ['Row','Col','List','SwipeCell','Button','Cell']

TList.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    componentsPC.forEach((item)=>{
      const uiItem = require('element-ui')[item]
      Vue.component(uiItem.name,uiItem)
    })
    await import('element-ui/lib/theme-chalk/table.css')
    await import('element-ui/lib/theme-chalk/table-column.css')
    await import('element-ui/lib/theme-chalk/pagination.css')

    const link = (await import('element-ui/packages/link')).default
    await import('element-ui/lib/theme-chalk/link.css')
    Vue.component(link.name, link)
    Vue.component(TTable.name,TTable)

  }else if(apptype === 'H5'){
    const row =  (await import('vant/lib/row')).default
    await import('vant/lib/row/style')
    Vue.component(row.name,row)

    const col =  (await import('vant/lib/col')).default
    await import('vant/lib/col/style')
    Vue.component(col.name,col)

    const cell =  (await import('vant/lib/cell')).default
    await import('vant/lib/cell/style')
    Vue.component(cell.name,cell)

    const list =  (await import('vant/lib/list')).default
    await import('vant/lib/list/style')
    Vue.component(list.name,list)

    const swipeCell =  (await import('vant/lib/swipe-cell')).default
    await import('vant/lib/swipe-cell/style')
    Vue.component(swipeCell.name,swipeCell)

    const button =  (await import('vant/lib/button')).default
    await import('vant/lib/button/style')
    Vue.component(button.name,button)




    Vue.component(CommonList.name,CommonList)
  }
  Vue.component(TList.name, TList);
};
// TList._components = {
//   'PC':[...componentsPC,TList],
//   'H5':[...componentsH5,TList],
// }
export default TList

