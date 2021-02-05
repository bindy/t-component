import Loading from './TLoading.vue';
import Vue from 'vue';
Loading.newInstance = properties => {
    const props = properties || {};

    const Instance = new Vue({
        data:props,
        render(h){
            return h(Loading,{
                props:props
            })
        }
    })

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const loading = Instance.$children[0];

    return {
        add(loadingProps){
            loading.add(loadingProps)
        },
        close(){
            loading.remove()
        }
    }

}


export default Loading;
