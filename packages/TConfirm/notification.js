import Confirm from './TConfirm.vue';
import Vue from 'vue';
Confirm.newInstance = properties => {
    const props = properties || {};

    const Instance = new Vue({
        data:props,
        render(h){
            return h(Confirm,{
                props:props
            })
        }
    })

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const confirm = Instance.$children[0];

    return {
        add(noticeProps){   
            confirm.add(noticeProps)
        },
        remove(name){
            confirm.remove(name)
        }
    }

}

export default Confirm;
