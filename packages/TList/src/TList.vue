<template>
<div>
    <t-table v-if="apptype === 'PC'" :table-data="listData" @paginationHandle="pageHandle" :total="total" :size="size" :pageSize="pageSize">
        <template #column>
            <el-table-column align="center" :label="label.name" v-for="(label,index) in labels" :key="index">
                <template slot-scope="scope">
                    <el-link type="primary" v-if="index === 0" @click="clickItem(linkFunc,scope.row)">{{scope.row[label.key]}}</el-link>
                    <span v-else>{{scope.row[label.key]}}</span>
                </template>
            </el-table-column>
            <el-table-column v-if="action" align="center" label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" v-if="editIcon" @click="editAction(scope.row)" :icon="'el-icon-'+editIcon" />
                    <el-button v-else @click="editAction(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button type="primary" size="small" v-if="deleteIcon" @click="deleteAction(scope.row)" :icon="'el-icon-'+deleteIcon" />
                    <el-button v-else type="text" @click="deleteAction(scope.row)" size="small">删除</el-button>
                </template>
            </el-table-column>
        </template>
    </t-table>

    <common-list v-if="apptype === 'H5'" :pageSize="pageSize" :table-data="listData" :action="action" :edit-action="editAction" :edit-icon="editIcon" :delete-action="deleteAction" 
     :delete-icon="deleteIcon" @load="pageHandle" :total="total" :size="size">
        <template v-slot="{data}" v-if="labels.length>=3">
            <van-row v-for="(row) in [0,2]" :key="row" @click="clickItem(linkFunc,data)">
                <van-col :span="col===0?14:10" v-for="(col) in [0,1]" :key="col">
                    <span v-if="row+col < 3" class="text-truncate">{{(labels[row+col]).name}} :
                        <span class="">{{data[labels[row+col]['key']]}}</span>
                    </span>
                </van-col>
            </van-row>
        </template>
    </common-list>
</div>
</template>

<script>

import iconName from '../../iconName'
const iconlist = Array.from(new Set(Object.keys(iconName).map((item) => item.slice(0,-3))))

/**
 * @example ../../../examples/docs/examples/TList.md
 */
export default {
    name: 'TList',
    data() {
        return {
            tagName: ''
        }
    },
    computed: {
    },
    props: {
        listData: {
            type: Array,
            default: () => []
        },
        labels: {
            type: Array,
            //[{'name':'xxx','key':'name'}]
        },
        linkFunc: {
            type: Function,
        },
        total: {
            type: Number,
        },
        size:{
            type:String,
        },
        pageSize:{
            type:Number,
            default:10
        },
        action: {
            type: Boolean,
            default: () => false
        },
        editIcon:{
            type:String,
            validator(value) {
                return  iconlist.includes(value);
            },
        },
        deleteIcon:{
            type:String,
            validator(value) {
                return  iconlist.includes(value);
            },
        },
        editAction: {
            type: Function,            
        },
        deleteAction: {
            type: Function,
        }
    },
    beforeMount() {
        
    },
    methods: {
        clickItem(func, row) {
            if (func !==null && func !== undefined) {
                func(row)
            }
        },
        pageHandle(e) {
            this.$emit('pageHandle', e)
        }
    }
}
</script>

<style >
.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    max-width: 100%;
}
  .text-truncate  span {
        color: #323233
    }

</style>
