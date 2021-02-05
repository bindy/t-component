<template>
<component :is="tagName"  v-bind="attrObj" ref="van-input" >
    <el-input v-if="apptype==='PC' && typeValid" v-bind="inputObj" ref="el-input" />
    <template #input v-if="apptype==='H5'">
        <slot />
    </template>
    <slot v-if="apptype==='PC'" />
</component>

</template>

<script>
import iconName from '../../iconName'
const iconlist = Array.from(new Set(Object.keys(iconName).map((item) => item.slice(0,-3))))
/**
 * @example ../../../examples/docs/examples/TFormItem.md
 */
export default {
    name: 'TFormItem',
    data() {
        return {
            tagName: '',
        }
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    watch: {
        
    },
    computed: {
        typeValid(){
            return this.type !== 'radio' && this.type !== 'button' && this.type !== 'select'
        },
        inputObj(){
            let attrs = {}
            if(this.apptype === 'PC'){
                attrs['maxlength'] = this.maxlength
                attrs['type'] = this.type
                attrs['autosize'] = this.autosize
                attrs['placeholder'] = this.placeholder
                attrs['value'] = this.value
                attrs['disabled'] = this.disabled
                attrs['readonly'] = this.readonly
                attrs['clearable'] = this.clearable
                attrs['autofocus'] = this.autofocus
                attrs['show-word-limit'] = this.showWordLimit
                attrs['prefix-icon'] = iconName[`${this.leftIcon}-${this.apptype}`]
                attrs['suffix-icon'] = iconName[`${this.rightIcon}-${this.apptype}`]

            }
            return attrs
        },
        attrObj() {
            let attrs = {}
            attrs['label'] = this.label
            attrs['rules'] = this.rules
            attrs['required'] = this.required
            attrs['size'] = this.size
            attrs['label-width'] = this.labelWidth
            if(this.apptype === 'PC'){
                attrs['prop'] = this.name;
                // attrs['error'] = this.error['msg']
                // attrs['show-message'] = this.error['show']
            }else if(this.apptype === 'H5'){
                attrs['name'] = this.name;
                // attrs['error-message'] = this.error['msg']
                // attrs['error'] = this.error['show']
                attrs['maxlength'] = this.maxlength
                attrs['type'] = this.type
                attrs['autosize'] = {
                    'minHeight':this.autosize['minRows']*10,
                    'maxHeight':this.autosize['maxRows']*10,
                }
                attrs['placeholder'] = this.placeholder
                attrs['value'] = this.value
                attrs['disabled'] = this.disabled
                attrs['readonly'] = this.readonly
                attrs['clearable'] = this.clearable
                attrs['autofocus'] = this.autofocus
                attrs['show-word-limit'] = this.showWordLimit
                attrs['left-icon'] = iconName[`${this.leftIcon}-${this.apptype}`]
                attrs['right-icon'] = iconName[`${this.rightIcon}-${this.apptype}`]
            }
            return attrs
        }
    },
    props: {
        /**
         * 绑定值
         *
         */
        value:{
            type: [String, Number],
        },
        /**
         * 表单项类型
         *  @value text,number,password,textarea,digit
         */
        type: {
            type: String,
            default: () => 'text'
        },
        /**
         * 标签文本
         *
         */
        label: {
            type: String,
            default: () => ''
        },
        /**
         * 表单域标签的宽度
         *
         */
        labelWidth:{
            type: String,
        },
        /**
         * 表单域 model 字段
         *
         */
        name: {
            type: String,
            default: () => ''
        },
        /**
         * 输入框占位文本
         *
         */
        placeholder: {
            type: String,
            default: () => ''
        },
        /**
         * 最大输入长度
         *
         */
        maxlength:{
            type: Number
        },
        /**
         * 输入框尺寸
         *
         */
        size:{
            type: String,
        },
        /**
         * 输入框头部图标
         *
         */
        leftIcon:{
            type: String,
            validator(value) {
                return iconlist.includes(value);
            },
        },
        /**
         * 输入框尾部图标
         *
         */
        rightIcon:{
            type: String,
            validator(value) {
                return iconlist.includes(value);
            },
        },
        /**
         * 自适应内容高度，只对 textarea 有效，
         * 可传入对象如，{ minRows: 2, maxRows: 6 }
         */
        autosize:{
            type: [Boolean, Object],
            default: () => false
        },
        /**
         * 是否禁用
         * @value true,false
         */
        disabled:{
            type: Boolean,
            default: () => false
        },
        /**
         * 是否只读
         * @value true,false
         */
        readonly:{
            type: Boolean,
            default: () => false
        },
        /**
         * 是否显示表单必填星号
         * @value true,false
         */
        required:{
            type: Boolean,
            default: () => false
        },
        /**
         * 是否可清空
         * @value true,false
         */
        clearable:{
            type: Boolean,
            default: () => false
        },
        /**
         * 是否自动聚焦
         * @value true,false
         */
        autofocus:{
            type: Boolean,
            default: () => false
        },
        /**
         * 是否显示字数统计，需要设置maxlength属性
         * @value true,false
         */
        showWordLimit:{
            type: Boolean,
            default: () => false
        },
        /**
         * 表单校验规则
         * 
         */
        rules:{
            type: Array,
        },
        
        // error:{
        //     type:Object,
        //     default: () => {
        //         return {
        //             'msg':'',
        //             'show':true
        //         }
        //     }
        // }
    },
    beforeMount() {
        if (this.apptype === 'PC') {
            this.tagName = 'el-form-item'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-field'
        }
    },
    mounted(){
        this.$nextTick(() => {
            if (this.apptype === 'PC') {
                if(this.$refs['el-input'])
                    this.$refs['el-input'].$on('input',(e)=>this.$emit('change',e))
            } else if (this.apptype === 'H5') {
                this.$refs['van-input'].$on('input',(e)=>this.$emit('change',e))
            }
        })
    },
}
</script>
