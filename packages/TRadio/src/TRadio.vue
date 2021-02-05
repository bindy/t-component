<template>
    <component :is="tagName" v-bind="attrObj"  @change="changeVal" @click="changeVal">
        <slot />
    </component>
</template>

<script>

export default {
    name: 'TRadio',
    data() {
        return {
            tagName: '',
        }
    },
    computed: {
        attrObj() {
            let attrs = {}
            let _size = this.size
            attrs['disabled'] = this.disabled
            if (this.apptype === 'H5') {
                switch (this.size) {
                    case 'medium':
                        _size = '20px';
                        break;
                    case 'small':
                        _size = '18px';
                        break;
                    case 'mini':
                        _size = '16px';
                        break;
                }
                attrs['icon-size'] = _size
                attrs['name'] = this.labelName
            }else if (this.apptype === 'PC') {
                attrs['label'] = this.labelName
                attrs['size'] = _size
                attrs['border'] = this.border
            }
            return attrs
        },
        
    },
    props: {
        /**
         * 单选框的值
         *
         */
        labelName: {
            type: [String, Number],
            default: () => ''
        },
        /**
         * 单选框尺寸
         * @value medium,small,mini
         */
        size: {
            type: String,
            validator (value) {
                return ['small', 'medium','mini'].includes(value);
            },
            default: () => 'medium'
        },
        /**
         * 是否带边框
         * @value true,false
         */
        border: {
            type: Boolean,
            default: () => false
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
            this.tagName = 'el-radio'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-radio'
        }
    },
    methods:{
        changeVal(){
            this.$emit('rchange', this.labelName)
        }
    }
}
</script>
