import TTable from './src/TTable.vue';
import { DeviceInstance } from '../utils'
import config from '../config'

const componentsPC = ['Table', 'TableColumn', 'Pagination']

TTable.install = async function (Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  //['Table', 'TableColumn', 'Pagination'] 暂时不支持按需
  if (apptype === 'PC') {
    componentsPC.forEach((item) => {
      const uiItem = require('element-ui')[item]
      Vue.component(uiItem.name, uiItem)
    })
    await import('element-ui/lib/theme-chalk/table.css')
    await import('element-ui/lib/theme-chalk/table-column.css')
    await import('element-ui/lib/theme-chalk/pagination.css')

    const icon = (await import('element-ui/packages/icon')).default
    await import('element-ui/lib/theme-chalk/icon.css')
    Vue.component(icon.name, icon)
  }
  else if (apptype === 'H5') {
    const pagination = (await import('vant/lib/pagination')).default
    await import('vant/lib/pagination/style')
    Vue.component(pagination.name, pagination)

    componentsPC.forEach((item) => {
      const uiItem = require('element-ui')[item]
      Vue.component(uiItem.name, uiItem)
    })
    await import('element-ui/lib/theme-chalk/table.css')
    await import('element-ui/lib/theme-chalk/table-column.css')
    
  }

  Vue.component(TTable.name, TTable);
};
// TTable._components = {
//   'PC':[...componentsPC,TTable],
//   'H5':[...componentsH5,TTable],
// }
export default TTable

