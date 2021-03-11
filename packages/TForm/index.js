import TForm from './src/TForm.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

TForm.install = function(Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  if(apptype === 'H5'){
    const Form = require('vant').Form
    Vue.component(Form.name,Form)
    require('vant/lib/form/style')
  }else if(apptype === 'PC'){
    const Form = require('element-ui').Form
    Vue.component(Form.name,Form)
    require('element-ui/lib/theme-chalk/form.css')
  }
  Vue.component(TForm.name, TForm);
};
// TForm._components = {
//   'PC':[...componentsPC,TForm],
//   'H5':[...componentsH5,TForm],
// }
export default TForm

