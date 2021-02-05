import Notification from './notification.js';
import Vue from 'vue';
import {DeviceInstance } from '../utils'
import config from '../config'
let messageInstance;


setTimeout(()=>{
    const apptype = Vue.prototype.apptype || config['apptype'] || DeviceInstance().getType()
    if(apptype === 'PC'){
        let component = require('element-ui').Alert
        let name = component.name.replace(/([A-Z])/g,"-$1").toLowerCase().replace('-el-','');
        require(`element-ui/lib/theme-chalk/${name}.css`);
        Vue.component(component.name,component)
    }
    
    if(apptype === 'H5'){
        require(`vant/lib/popup/style`);
        require(`vant/lib/notify/style`);
        
    }
},0)
function getMessageInstance(option){
    messageInstance = messageInstance || Notification.newInstance(option);
    return messageInstance
}

function notice(options){
    let instance = getMessageInstance({});

    if(Object.prototype.toString.call(options) === '[object String]'){
        instance.add({
            content:options,
            duration: 1500,
            type:'success',
            _hide:false
        })
    }else if(Object.prototype.toString.call(options) === '[object Object]'){
        instance.add({
            content:options.content || '',
            duration:options.duration || 1500,
            type:options.type || 'success',
            _hide:false
        })
    }
    
}


export default notice
