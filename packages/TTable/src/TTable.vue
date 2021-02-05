<template>
  <div class="cTable" >
    <el-table
        :class="`table-${apptype}`"
        
        :data="tableData"
        :size="size"
        border
        header-row-class-name="el-commom-head"
        :max-height="maxHeight || null"
        :default-sort="{order:'descending'}"
    >
      <slot name="column"></slot>
    </el-table>
    <div class="commom-pagination" v-if="pigination ">

      <el-pagination
        v-if="apptype==='PC'"
          background
          layout="prev,pager,next,sizes,total"
          :total="total"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          small
          @size-change="handleSizeChange"
          @current-change="handlePageChange"
          :current-page.sync="currentPage"
      >
      </el-pagination>
      <van-pagination v-if="apptype==='H5'" @change="handlePageChange" v-model="currentPage" :total-items="total" 
      :items-per-page="pageSize"
      mode="simple" />
    </div>
  </div>
</template>

<script>
/**
 * @example ../../../examples/docs/examples/TTable.md
 */
  export default {
    name: "TTable",
    data: () => ({
      currentPage:0,
      pageSizes:[10,40,60,80,100],
    }),
    props: {
      total:{
        type:Number,
        default:0
      },
      tableData: {
        type: Array,
        required: true,
        default: () => []
      },
      pigination:{
        type:Boolean,
        default:true
      },
      size:{
        type:String,
        default:'medium',
      },
      pageSize:{
        type:Number,
        default:10
      },
      maxHeight:{
        type:[String,Number],
        required: false,
      }
    },
    computed: {

    },
    mounted(){
      
      this.handlePageChange(1)
    },
    methods:{
      handleSizeChange(val) {
        let param ={
          pageNo:this.currentPage,
          pageSize:val
        }
        this.$emit('paginationHandle',param)
      },
      handlePageChange(val) {
        let param ={
          pageNo:val,
          pageSize:this.pageSize
        }
        this.$emit('paginationHandle',param)
      }
    }
  }
</script>

<style>
.table-H5 {
    font-size: 12px;
}

.table-H5 .el-commom-head th {
    background: #fff;
    padding: 2px 0;
    text-align: left;
}

.table-H5 .el-commom-head th .cell {
    color: #666;
}

.table-H5 .el-commom-head tr>td .cell {
    text-align: left;

}

.cTable {
    overflow: auto;
    width: 100%;
}

.cTable tr>td .cell {
    white-space: nowrap;
}

.cTable .el-table__fixed {
    background-color: #fff;
    ;
}

.el-table th,
.el-table tr {
    background-color: transparent;
}

.el-commom-head {
    font-weight: 700;
    color: #222;
}

.el-commom-head th {
    background: rgba(243, 243, 243, 1);

}

.commom-pagination {
    margin-top: 20px;
    text-align: right;
}

.commom-pagination .el-pager {
    margin-right: 10px;
}

.commom-pagination .el-pagination__sizes {
    position: relative;
    top: -4px;
}
</style>
