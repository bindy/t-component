<template>
<component :is="tagName" v-bind="attrObj" @click="$emit('click')">
    <slot />
</component>
</template>

<script>
import iconName from '../../iconName'
const iconlist = Array.from(new Set(Object.keys(iconName).map((item)=>item.slice(0,-3))))
/**
 * @example ../../../examples/docs/examples/TIcon.md
 */
export default {
    name: 'TIcon',
    data() {
        return {
            tagName: ''
        }
    },
    computed: {
        attrObj() {
            let attrs = {}
            attrs['name'] = iconName[`${this.name}-${this.apptype}`]
            attrs['class'] = iconName[`${this.name}-${this.apptype}`]
            if(this.apptype === 'H5'){
                attrs['color'] = this.color
                attrs['size'] = this.size
            }else{
                let size
                let type = Object.prototype.toString.call(this.size)
                if(type === '[object Number]'){
                    size = this.size + 'px'
                }else{
                    size = this.size;
                }
                attrs['style'] = {'color':this.color,'font-size':size}
            }
            
            return attrs
        }
    },
    props: {
        name: {
            type: String,
            validator (value) {
                return iconlist.includes(value);
            },
        },
        size: {
            type: [String,Number],
        },
        color: {
            type: String,
        }
    },
    beforeMount() {
        if (this.apptype === 'PC') {
            this.tagName = 'i'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-icon'
        }
    }
}
</script>
