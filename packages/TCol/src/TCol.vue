<template>
<component :is="tagName" v-bind="attrObj">
    <slot />
</component>
</template>

<script>
/**
 * @example ../../../examples/docs/examples/TCol.md
 */
export default {
    name: 'TCol',
    data() {
        return {
            tagName: ''
        }
    },
    computed: {
        attrObj() {
            let attrs = {}
            attrs['span'] = this.span
            attrs['offset'] = this.offset
            attrs['tag'] = this.tag

            return attrs
        }
    },
    props: {
        /**
         * 栅格占据的列数
         * 
         */
        span: {
            type: Number,
            default: () => 24
        },
        /**
         * 栅格左侧的间隔格数
         * 
         */
        offset: {
            type: Number,
            default: () => 0
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
            this.tagName = 'el-col'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-col'
        }
    }
}
</script>
