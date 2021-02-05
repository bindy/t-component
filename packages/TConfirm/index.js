import Notification from './notification.js';
import Vue from 'vue';
import {DeviceInstance } from '../utils'
import config from '../config'
let messageInstance;

setTimeout(()=>{
    const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
    if(apptype === 'PC'){
        let component = require('element-ui').Dialog
        let name = component.name.replace(/([A-Z])/g,"-$1").toLowerCase().replace('-el-','');
        require(`element-ui/lib/theme-chalk/${name}.css`);
        Vue.component(component.name,component)
    }
    
    if(apptype === 'H5'){
        require(`vant/lib/popup/style`);
        require(`vant/lib/dialog/style`);
        
    }
},0)
function getMessageInstance(option){
    messageInstance = messageInstance || Notification.newInstance(option);
    return messageInstance
}
function notice(option){
    let instance = getMessageInstance({});
    if (typeof Promise !== 'undefined') {
        return new Promise((resolve, reject)=>{
            instance.add({
                content:option.content || '真的要关闭吗？',
                title:option.title || '提示',
                callback:option.callback,
                cancelText:option.cancelText,
                confirmText:option.confirmText,
                resolve: resolve,
                reject: reject
        
            })
        })
    } else {
        instance.add({
            content:option.content || '真的要关闭吗？',
            title:option.title || '提示',
            callback:option.callback,
            cancelText:option.cancelText,
            confirmText:option.confirmText,
    
        })
    }
    
}


export default notice
