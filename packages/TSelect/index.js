import TSelect from './src/TSelect.vue';
import { DeviceInstance } from '../utils'
import config from '../config'

const componentsPC = ['Select', 'Option', 'Cascader']

TSelect.install = async function (Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()

  if (apptype === 'PC') {
    // ['Select', 'Option', 'Cascader'] 暂时不支持按需
    componentsPC.forEach((item) => {
      const uiItem = require('element-ui')[item]
      
      Vue.component(uiItem.name, uiItem)
    })
    await import('element-ui/lib/theme-chalk/select.css')
    await import('element-ui/lib/theme-chalk/option.css')
    await import('element-ui/lib/theme-chalk/cascader.css')
  }
  else if (apptype === 'H5') {
    const popup = (await import('vant/lib/popup')).default
    await import('vant/lib/popup/style')
    Vue.component(popup.name, popup)

    const picker = (await import('vant/lib/picker')).default
    await import('vant/lib/picker/style')
    Vue.component(picker.name, picker)

    const icon = (await import('vant/lib/icon')).default
    await import('vant/lib/icon/style')
    Vue.component(icon.name, icon)
  }

  Vue.component(TSelect.name, TSelect);
};
// TSelect._components = {
//   'PC':[...componentsPC,TSelect],
//   'H5':[...componentsH5,TSelect],
// }
export default TSelect

