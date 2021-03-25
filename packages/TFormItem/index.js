import TFormItem from './src/TFormItem.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

// const componentsPC = ['FormItem','Input']
// const componentsH5 = ['Field']

TFormItem.install = async function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  // if(apptype === 'H5'){
  //   componentsH5.forEach((item)=>{
  //     const uiItem = require('vant')[item]
  //     if(uiItem.name.indexOf('van')> -1)
  //         require(`vant/lib/${uiItem.name.replace('van-','')}/style`);
  //     if(uiItem.name.indexOf('El')> -1){
  //         let name = uiItem.name.replace(/([A-Z])/g,"-$1").toLowerCase().replace('-el-','');
  //         require(`element-ui/lib/theme-chalk/${name}.css`);
  //       }
  //     Vue.component(uiItem.name,uiItem)
  //   })
  // }else if(apptype === 'PC'){
  //   componentsPC.forEach((item)=>{
  //     const uiItem = require('element-ui')[item]
  //     if(uiItem.name.indexOf('van')> -1)
  //         require(`vant/lib/${uiItem.name.replace('van-','')}/style`);
  //     if(uiItem.name.indexOf('El')> -1){
  //         let name = uiItem.name.replace(/([A-Z])/g,"-$1").toLowerCase().replace('-el-','');
  //         require(`element-ui/lib/theme-chalk/${name}.css`);
  //       }
  //     Vue.component(uiItem.name,uiItem)
  //   })
  // }  
  if(apptype === 'PC'){
    const formItem =  (await import('element-ui/packages/form-item')).default
    await import('element-ui/lib/theme-chalk/form-item.css')
    Vue.component(formItem.name,formItem)

    const input =  (await import('element-ui/packages/input')).default
    await import('element-ui/lib/theme-chalk/input.css')
    Vue.component(input.name,input)
  }
  else if(apptype === 'H5'){
    const field =  (await import('vant/lib/field')).default
    await import('vant/lib/field/style')
    Vue.component(field.name,field)
  }
  Vue.component(TFormItem.name, TFormItem);
};
// TFormItem._components = {
//   'PC':[...componentsPC,TFormItem],
//   'H5':[...componentsH5,TFormItem],
// }
export default TFormItem

