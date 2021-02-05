<template>
<div class="alert">
    <div class="alert-content" v-for="(item,index) in notices" :key="index">
        <el-alert v-if="apptype === 'PC'" :id="'alert'+item.name" :title="item.content" :type="item.type" show-icon :class="{'hide':item._hide}">
        </el-alert>
        
        <div :class="`alert-item van-notify van-notify--${item.type} ${item._hide?'hide':''}`" v-if="apptype === 'H5'" :id="'alert'+item.name" >
            <span>{{item.content}}</span>
        </div>
    </div>
</div>
</template>

<script>
import {
    uuid,
    on,
    off
} from '../utils'

export default {
    name: 'TAlert',
    data() {
        return {
            tagName: '',
            notices: [],
            show: true,
        }
    },
    computed: {
        attrObj() {
            let attrs = {}
            attrs['overlay'] = false
            attrs['position'] = 'top'
            attrs['lock-scroll'] = false
            attrs['value'] = this.show
            return attrs
        }
    },
    
    methods:{
        startTimer(notice) {
            const dom = document.querySelector('#alert'+notice.name)
            on(dom, 'transitionend', this.destroyElement)
            if (notice.duration > 0) {
                setTimeout(() => {
                    notice._hide = true
                }, notice.duration)

            }
        },
        destroyElement(e) {
            const name = e.target.id
            if(document.getElementById(name)){
                this.remove(name)
            }
        },
        add(notice){
            const name = uuid();
            let _notice = Object.assign({name:name},notice);
            _notice._hide = false
            this.notices.push(_notice)
            this.$nextTick(()=>{
                this.startTimer(_notice);
            })
        },
        remove(name){
            let notices = this.notices
            name = name.replace('alert','')
            const index = notices.findIndex((item)=>item.name === name)
            if(index !== undefined){
                off(document.getElementById('alert'+name), 'transitionend', this.destroyElement)
                document.getElementById('alert'+name).parentNode.remove()
                            // this.notices.splice(index,1)

            }         
        }
    }
}
</script>

<style  scoped>
.alert {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    text-align: left;
    z-index: 1000;
}

.alert-content {
    /* position: absolute; */
    width: 100%;
    margin-bottom: 8px;
}
.el-alert{
    margin: 0 auto;
    width: 40%;
    transition: all 300ms ease-out;
}
.van-notify{
    width:100%;
    transition: all 300ms ease-out;
}
.el-alert.hide,
.van-notify.hide{
    transform:translate3d(0,-100px,0);
    opacity: 0;
}

</style>
