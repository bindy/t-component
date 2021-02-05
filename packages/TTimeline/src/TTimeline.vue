<template>
<component :is="tagName" v-bind="attrObj" :class="`timeline-${apptype}`">
    <t-timeline-item v-for="(item,index) in data" :data="item" :index="index" :key="index" />
</component>
</template>

<script>
/**
 * @example ../../../examples/docs/examples/TTimeline.md
 */
export default {
    name: 'TTimeline',
    data() {
        return {
            tagName: '',
        }
    },
    computed: {
        attrObj() {
            let attrs = {}
            if (this.apptype === 'H5') {
                attrs['direction'] = 'vertical';
                attrs['active'] = -1;
                attrs['inactive-color'] = '#000'
            }
            return attrs
        }
    },

    props: {
        data: {
            type: Array
        },
    },
    beforeMount() {
        if (this.apptype === 'PC') {
            this.tagName = 'div'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-steps'
        }
    },
    mounted() {

    },
}
</script>

<style >
.timeline-PC {
    height: 157px;
    position: relative;
    display: flex;
    align-items: center;
    overflow-x: auto;
}

</style>
