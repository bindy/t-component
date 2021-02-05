<template>
<component :is="tagName" v-bind="attrObj" @change="changeValue">
    <slot />
</component>
</template>

<script>
/**
 * @example ../../../examples/docs/examples/TSwitch.md
 */
export default {
    name: 'TSwitch',
    data() {
        return {
            tagName: ''
        }
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    computed: {
        attrObj() {
            let attrs = {}
     
            attrs['disabled'] = this.disabled
            attrs['active-color'] = this.activeColor
            attrs['inactive-color'] = this.inActiveColor
            attrs['active-value'] = this.activeValue
            attrs['inactive-value'] = this.inactiveValue
            attrs['value'] = this.value
            if(this.apptype === 'H5'){
                attrs['size'] = "24px" 
            }

            return attrs
        }
    },
    props: {
        /**
         * 绑定值
         *
         */
        value: {
            type: [Boolean, String, Number, Array]
        },
        /**
         * 是否禁用
         * @value true,false
         */
        disabled: {
            type: Boolean,
            default: () => false
        },
        /**
         * 打开时的背景色
         *
         */
        activeColor: {
            type: String,
            default: () => '#409EFF'
        },
        /**
         * 关闭时的背景色
         *
         */
        inActiveColor: {
            type: String,
            default: () => '#C0CCDA'
        },
        /**
         * 打开时的值
         *
         */
        activeValue: {
            type: [Boolean,String,Number],
            default: () => true
        },
        /**
         * 关闭时的值
         *
         */
        inactiveValue: {
            type: [Boolean,String,Number],
            default: () => false
        }
    },
    beforeMount() {
        if (this.apptype === 'PC') {
            this.tagName = 'el-switch'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-switch'
        }
    },
    methods:{
        changeValue(e){
            this.$emit('change',e)
        }
    }
}
</script>
