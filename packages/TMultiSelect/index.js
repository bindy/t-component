import TMultiSelect from './src/TMultiSelect.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

const componentsPC = ['Option']
// const componentsH5 = ['Popup','Tag','Search','CheckboxGroup',
// 'CellGroup','Cell','Checkbox','TreeSelect']

TMultiSelect.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'PC'){
    componentsPC.forEach((item)=>{
      const uiItem = require('element-ui')[item]      
      Vue.component(uiItem.name,uiItem)
    })
    await import('element-ui/lib/theme-chalk/option.css')
  }else if(apptype === 'H5'){
    const popup = (await import('vant/lib/popup')).default
    await import('vant/lib/popup/style')
    Vue.component(popup.name, popup)

    const tag = (await import('vant/lib/tag')).default
    await import('vant/lib/tag/style')
    Vue.component(tag.name, tag)

    const search = (await import('vant/lib/search')).default
    await import('vant/lib/search/style')
    Vue.component(search.name, search)

    const CellGroup = (await import('vant/lib/cell-group')).default
    await import('vant/lib/cell-group/style')
    Vue.component(CellGroup.name, CellGroup)
    
    const Cell = (await import('vant/lib/cell')).default
    await import('vant/lib/cell/style')
    Vue.component(Cell.name, Cell)

    const checkboxGroup = (await import('vant/lib/checkbox-group')).default
    await import('vant/lib/checkbox-group/style')
    Vue.component(checkboxGroup.name, checkboxGroup)
    
    const checkbox = (await import('vant/lib/checkbox')).default
    await import('vant/lib/checkbox/style')
    Vue.component(checkbox.name, checkbox)

    const TreeSelect = (await import('vant/lib/tree-select')).default
    await import('vant/lib/tree-select/style')
    Vue.component(TreeSelect.name, TreeSelect)
  }

  Vue.component(TMultiSelect.name, TMultiSelect);
};
// TMultiSelect._components = {
//   'PC':[...componentsPC,TMultiSelect],
//   'H5':[...componentsH5,TMultiSelect],
// }
export default TMultiSelect

