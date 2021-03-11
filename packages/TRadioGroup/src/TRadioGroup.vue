<template>
<div>
<component :is="tagName"  v-bind="attrObj" >
    
    <t-radio v-for="(name,index) in labelNames" :key="index" :size="size" :border="attrObj['border']" :labelName="name" @rchange="changeVal(name)">
        {{labelTexts[index] }}
    </t-radio>
</component>
</div>
</template>

<script>

/**
 * elementUI 有组件没有注册的报错，但不影响使用
 * https://github.com/ElemeFE/element/issues/17908
 * @example ../../../examples/docs/examples/TRadioGroup.md
 */

export default {
    name: 'TRadioGroup',
    data() {
        return {
            tagName: '',
            curValue: ''
        }
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    computed: {
        attrObj() {
            let attrs = {
                'border':false
            }
            let _size = ''
            attrs['value'] = this.value
            attrs['disabled'] = this.disabled
            if (this.apptype === 'H5') {
                switch (this.size) {
                    case 'medium':
                        _size = '24px';
                        break;
                    case 'small':
                        _size = '20px';
                        break;
                    case 'mini':
                        _size = '16px';
                        break;
                }
                attrs['icon-size'] = _size
                attrs['checked-color'] = this.color
                attrs['direction'] = 'horizontal'
            }else if(this.apptype === 'PC'){                
                if(this.size!== undefined){
                    attrs['size'] = this.size
                    attrs['border'] = true
                }
                attrs['fill'] = this.color
                attrs['text-color'] = this.color
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
            type: [String, Number],
        },
        /**
         * 标签值
         *
         */
        labelNames: {
            type: Array,
            default: () => []
        },
        /**
         * 标签名
         *
         */
        labelTexts: {
            type: Array,
            default: () => []
        },
        /**
         * 单选框组尺寸
         * @value medium,small,mini
         */
        size: {
            type: String,
            validator (value) {
                return ['small', 'medium','mini'].includes(value);
            },
        },
        /**
         * 单选框激活时的填充色
         * 
         */
        color: {
            type: String,
            default: () => '#1989fa'
        },
        /**
         * 是否禁用
         * @value true,false
         */
        disabled: {
            type: Boolean,
            default: () => false
        },
    },
    beforeMount() {
        if (this.apptype === 'PC') {
            this.tagName = 'ElRadioGroup'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-radio-group'
        }
    },
    methods: {
        changeVal(e) {
            this.$emit('change', e);
        }
    }
}
</script>
