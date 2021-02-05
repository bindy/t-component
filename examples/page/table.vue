<template>
  <t-table :table-data="listdata" @paginationHandle="pageHandle" :total="total" >
        <template #column>
          <el-table-column
              type="index"
              :fixed="true"
              width="30">
          </el-table-column>
          <el-table-column 
            align="center"
            :label="label.name"
            v-for="(label,index) in labels" 
            :key="index"
            :fixed="index===0?true:false">
                <template slot-scope="scope">
                    <span >{{scope.row[label.key]}}</span>
                </template>
            </el-table-column>
          </template>
      </t-table>
</template>
<script>
 export default {
    data() {
      return {
        listdata: [],
        tbData:[],
        total:0,
        labels: [{
                'name': '名称',
                'key': 'a'
            },
            {
                'name': '属性1',
                'key': 'b'
            },
            {
                'name': '属性2',
                'key': 'c'
            },
            {
                'name': '属性3',
                'key': 'd'
            },
        ],
      }
    },
    methods:{
      
      pageHandle(e) {
            console.log(e)
        if(this.tbData.length === 0){
          this.tbData = this.getTbData()
          this.total = this.tbData.length;
        }    
        this.listdata = this.tbData.slice(e.pageSize * (e.pageNo - 1), e.pageSize * (e.pageNo))
      },
      getTbData(){
        let item = {
          'a': 'TComponent 泛型组件',
          'b': 2,
          'c': 3,
          'd': 4,
          'title': '很长的标题很长的标题'
        }
        let tbData = []
        for(let i = 0;i<20;i++){
          tbData.push(item)
        }
        return tbData
      },
      link(e){
        console.log(e)
      },
      
    }
 }
</script>