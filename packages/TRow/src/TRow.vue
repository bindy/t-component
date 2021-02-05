<template>
<component :is="tagName" v-bind="attrObj">
    <slot />
</component>
</template>

<script>
/**
 * @example ../../../examples/docs/examples/TRow.md
 */
export default {
    name: 'TRow',
    data() {
        return {
            tagName: ''
        }
    },
    computed: {
        attrObj() {
            let attrs = {}
            attrs['gutter'] = this.gutter
            attrs['justify'] = this.justify
            attrs['align'] = this.align
            attrs['tag'] = this.tag
            attrs['type'] = this.type
            if(this.apptype === 'PC'){
                if(this.align === 'center'){
                    attrs['align'] = 'middle'
                }
            }

            return attrs
        }
    },
    props: {
        /**
         * 布局模式
         * @value flex
         */
        type: {
            type: String,
        },
        /**
         * 栅格间隔
         * 
         */
        gutter: {
            type: Number,
            default: () => 0
        },
        /**
         * flex 布局下的水平排列方式
         * @value start,end,center,space-around,space-between
         */
        justify: {
            type: String,
            default: () => 'start'
        },
        /**
         * flex 布局下的垂直排列方式
         * @value top,bottom
         */
        align: {
            type: String,
            default: () => 'top'
        },
        /**
         * 自定义元素标签
         * 
         */
        tag: {
            type: String,
            default: () => 'div'
        }
    },
    beforeMount() {
        if (this.apptype === 'PC') {
            this.tagName = 'el-row'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-row'
        }
    }
}
</script>
