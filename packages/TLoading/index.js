import Loading from './loading.js';
import Vue from 'vue';
import {DeviceInstance } from '../utils'
import config from '../config'
let loadingInstance;

setTimeout(()=>{
    const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
    if(apptype === 'H5'){
        let component = require('vant').Loading
        Vue.use(component)
        require(`vant/lib/loading/style`);
        require(`vant/lib/toast/style`);
    }else if(apptype === 'PC'){
        require(`element-ui/lib/theme-chalk/loading.css`);
    }
    
},0)
function getLoadingInstance(option){
    loadingInstance = loadingInstance || Loading.newInstance(option);
    return loadingInstance
}

function loading(options){
    let instance = getLoadingInstance({});
    
    instance.add({
        content:options.content || '加载中...',
    })
    return instance

}

export default loading
