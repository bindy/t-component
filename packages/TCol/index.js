import TCol from './src/TCol.vue';
import { DeviceInstance } from '../utils'
import config from '../config'

const componentsPC = [require('element-ui').Col]
const componentsH5 = [require('vant').Col]

TCol.install = function (Vue) {
  const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
  let components
  if(apptype === 'H5'){
    components = componentsH5
  }else if(apptype === 'PC'){
    components = componentsPC
  }
  components.forEach((item) => {
    if (item.name.indexOf('van') > -1)
      require(`vant/lib/${item.name.replace('van-', '')}/style`);
    if (item.name.indexOf('El') > -1) {
      let name = item.name.replace(/([A-Z])/g, "-$1").toLowerCase().replace('-el-', '');
      require(`element-ui/lib/theme-chalk/${name}.css`);
    }
    Vue.component(item.name, item)
  })
  Vue.component(TCol.name, TCol);
};
TCol._components = {
  'PC':[...componentsPC,TCol],
  'H5':[...componentsH5,TCol],
}
export default TCol

