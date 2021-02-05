import TButton from './src/TButton.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

let componentsPC = [require('element-ui').Button]
let componentsH5 = [require('vant').Button]

TButton.install = function(Vue) {
  
  const apptype =   Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType() 
  Vue.prototype.apptype = apptype
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
  Vue.component(TButton.name, TButton);
};
TButton._components = {
  'PC':[...componentsPC,TButton],
  'H5':[...componentsH5,TButton],
}
export default TButton;

