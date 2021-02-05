<template>
<component :is="tagName" v-bind="attrObj" @click="$emit('click')">
    <slot />
</component>
</template>

<script>

import iconName from '../../iconName'
const iconlist = Array.from(new Set(Object.keys(iconName).map((item) => item.slice(0,-3))))
/**
 * @example ../../../examples/docs/examples/TButton.md
 */
export default {
    name: 'TButton',
    data() {
        return {
            tagName: '',
        }
    },
  
    computed: {
        attrObj() {
            let attrs = {}
            let _type = this.type
            let _size = this.size

            attrs['icon'] = iconName[`${this.icon}-${this.apptype}`]
            attrs['disabled'] = this.disabled
            attrs['round'] = this.round
            attrs['loading'] = this.loading
            attrs['plain'] = this.plain
            attrs['native-type'] = this.nativeType
            if (this.apptype === 'PC') {
                if (this.type === 'info') {
                    _type = 'primary'
                }
                if (this.type === 'primary') {
                    _type = 'success'
                }
                if (this.size === 'large') {
                    _size = ''
                }
                if(this.size === 'default'){
                    _size = 'medium'
                }
            } else if (this.apptype === 'H5') {
                if (this.size === 'default') {
                    _size = 'normal'
                }
            }
            attrs['type'] = _type
            attrs['size'] = _size

            return attrs
        }
    },
    props: {
        /**
         * 按钮类型
         * 
         */
        type: {
            type: String,
            validator(value) {
                return ['primary', 'info', 'warning', 'danger', 'default'].includes(value)
            },
            default: () => 'default'
        },
        /**
         * 按钮大小
         * 
         */
        size: {
            type: String,
            validator(value) {
                return ['small', 'mini', 'default', 'large'].includes(value)
            },
            default: () => 'default'
        },
        /**
         * 图标按钮
         * 
         */
        icon: {
            type: String,
            validator(value) {
                return iconlist.includes(value)
            },
        },
        /**
         * 是否禁用
         * @values true,false
         */
        disabled: {
            type: Boolean,
            default: () => false
        },
        /**
         * 是否圆角按钮
         * @values true,false
         */
        round: {
            type: Boolean,
            default: () => false
        },
        /**
         * 是否加载中
         * @values true,false
         */
        loading: {
            type: Boolean,
            default: () => false
        },
        /**
         * 是否线框
         * @values true,false
         */
        plain: {
            type: Boolean,
            default: () => false
        },
        /**
         * 原生type属性
         * @values button,reset,submit
         */
        nativeType: {
            type: String,
            default: () => 'button'
        }
    },
    beforeMount() {
        if (this.apptype === 'PC') {
            this.tagName = 'el-button'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-button'
        }
    }
}
</script>

