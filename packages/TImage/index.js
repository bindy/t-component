import TImage from './src/TImage.vue';
import {DeviceInstance } from '../utils'
import config from '../config'

const componentsPC = [require('element-ui').Image]
const componentsH5 = [require('vant').Image]

TImage.install = function(Vue) {
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
  Vue.component(TImage.name, TImage);
};
TImage._components = {
  'PC':[...componentsPC,TImage],
  'H5':[...componentsH5,TImage],
}
export default TImage

