<template>
<component :is="tagName" v-bind="attrObj" ref="form">
    <slot />
</component>
</template>

<script>
/**
 * @example ../../../examples/docs/examples/TForm.md
 */
export default {
    name: 'TForm',
    data() {
        return {
            tagName: '',
        }
    },
    computed: {
        attrObj() {
            let attrs = {}
            let pos = this.labelPosition
            attrs['model'] = this.model
            attrs['disabled'] = this.disabled
            attrs['label-width'] = this.labelWidth
            if (this.apptype === 'H5') {
                if(this.labelPosition === 'top') pos = 'center'
                attrs['label-align'] = pos
                attrs['show-error'] = this.showMessage
            } else if (this.apptype === 'PC') {
                attrs['label-position'] = pos
                attrs['show-error-message'] = this.showMessage

            }
            return attrs
        },

    },
    props: {
        /**
         * 表单数据对象
         *
         */
        model: {
            type: Object,
        },
        /**
         * 表单域标签的宽度
         *
         */
        labelWidth: {
            type: String,
            default: () => ''
        },
        /**
         * 表单域标签的位置
         * @value left,right,top
         */
        labelPosition: {
            type: String,
            default: () => 'left'
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
         * 是否显示校验错误信息
         * @value true,false
         */
        showMessage: {
            type: Boolean,
            default: () => true
        },
    },
    beforeMount() {
        if (this.apptype === 'PC') {
            this.tagName = 'el-form'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-form'
        }
    },
    methods: {

        async submitForm() {
            if (this.apptype === 'PC') {
                let valid = await this.$refs['form'].validate()
                return valid
            } else if (this.apptype === 'H5') {
                let keys = Object.keys(this.model)
                let passNums = 0

                for (let key of keys) {
                    let r = await this.$refs['form'].validate(key)
                    if (r === undefined) ++passNums
                }
                return keys.length === passNums

            }
        }
    }
}
</script>
