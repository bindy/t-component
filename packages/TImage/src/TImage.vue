<template>
<component :is="tagName" v-bind="attrObj">
    <slot />
    
</component>
</template>

<script>
/**
 * @example ../../../examples/docs/examples/TImage.md
 */
export default {
    name: 'TImage',
    data() {
        return {
            tagName: '',

        }
    },
    computed: {
        attrObj() {
            let attrs = {}
            attrs['src'] = this.src
            attrs['fit'] = this.fit
            attrs['alt'] = this.alt
            if(this.apptype === 'PC'){
                attrs['lazy'] = this.lazy
            }else if(this.apptype === 'H5'){
                // attrs['lazy-load'] = this.lazy
            }
            return attrs
        }
    },
    props: {
        /**
         * 图片路径
         * 
         */
        src: {
            type: String,
            default: () => ''
        },
        /**
         * 图片适配方式
         * @values fill,contain,cover,none,scale-down
         */
        fit: {
            type: String,
            default: () => 'fill'
        },
        /**
         * 图片alt属性
         * 
         */
        alt: {
            type: String,
            default: () => ''
        },
        /**
         * 是否懒加载
         * @values true,false
         */
        lazy: {
            type: Boolean,
            default: () => false
        },
        
    },
    beforeMount() {
        if (this.apptype === 'PC') {
            this.tagName = 'el-image'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-image'
        }
    }
}
</script>
