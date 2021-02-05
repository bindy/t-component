<template>
<component :is="tagName" :name="name" ref="collapseItem" class="t-collapse-item" :disabled="disabled">
    <template #title>
        <div @click="open(name)">{{title}}
            <span class="title-bar" :style="{backgroundColor:color}"></span>
            <t-icon :name="icon" class="t-icon" />
        </div>
    </template>
    <slot />
</component>
</template>

<script>

export default {
    name: 'TCollapseItem',
    data() {
        return {
            tagName: '',
        }
    },
    inject: ['collapse'],
    props: {
        name: {
            type: [String, Number]
        },
        title: {
            type: String,
        },
        icon: {
            type: String,
        },
        color:{
            type:String,
        }

    },
    computed:{
        disabled(){
            return !this.collapse.status
        }
    },
    beforeMount() {
        if (this.apptype === 'PC') {
            this.tagName = 'el-collapse-item'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-collapse-item'
        }
    },
    mounted() {
    },
    methods: {
        open(name) {
            this.$parent.$emit('toggle', {
                name: name,
            })
        },
    }
}
</script>

<style>
.t-collapse-item .t-icon {
    margin-left: 5px;
}

.t-collapse-item .t-icon.is-disabled .el-collapse-item__header {
    color: #303133 !important;
    cursor: default !important;
}

.t-collapse-item .t-icon.is-disabled .el-collapse-item__header>div {
    position: relative;
}

.t-collapse-item .t-icon.is-disabled .el-collapse-item__header>div .title-bar {
    position: absolute;
    display: block;
    width: 6px;
    height: 14px;
    top: 50%;
    margin-top: -9px;
    left: -8px;
}

.t-collapse-item .el-collapse-item__arrow {
    display: none;
}

.t-collapse-item .el-collapse-item__content {
    padding-bottom: 0;
}

.t-collapse-item .el-collapse-item__wrap {
    border: 0
}
</style>
