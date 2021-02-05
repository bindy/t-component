<template>
    <component :is="tagName" v-bind="attrObj" ref="collapse">
        <slot />
    </component>
</template>

<script>

export default {
    name: 'TCollapse',
    data() {
        return {
            tagName: '',
            curValue: [],
            status:undefined
        }
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    computed: {
        attrObj() {
            let attrs = {}
            attrs['value'] = this.value
            return attrs
        }
    },
    provide() {
      return {
        collapse: this
      };
    },
    props: {
        value: {
            type: [Boolean, String, Number, Array]
        },
        isOn: {
            type: Boolean,
            default: true
        }

    },
    beforeMount() {
        if (this.apptype === 'PC') {
            this.tagName = 'el-collapse'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-collapse'
        }
    },
    mounted() {
        let curValue = this.value
        this.status = this.isOn
        if (this.isOn) {
            this.$refs.collapse.$on('toggle', (e) => {
                let index = curValue.indexOf(e.name)
                if (index > -1) curValue.splice(index, 1)
                else curValue.push(e.name)
                this.$emit('change', curValue)
            })
        }
    },
}
</script>

<style>
.el-collapse{
    border: 0;
    padding: 10px;
}
</style>
