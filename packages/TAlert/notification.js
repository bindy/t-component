import Alert from './TAlert.vue';
import Vue from 'vue';
Alert.newInstance = properties => {
    const props = properties || {};

    const Instance = new Vue({
        data:props,
        render(h){
            return h(Alert,{
                props:props
            })
        }
    })

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const alert = Instance.$children[0];

    return {
        add(noticeProps){
            if(component.apptype === 'H5'){
                noticeProps['type'] = getH5Type(noticeProps.type)
            }
            
            alert.add(noticeProps)
        },
        remove(name){
            alert.remove(name)
        }
    }

}

function getH5Type(type){
    let _type
    if(type === 'error'){
        _type = 'danger'
    }
    else if(type === 'info'){
        _type = 'primary'
    }else{
        _type = type
    }

    return _type
    
}

export default Alert;
