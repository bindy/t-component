<template>
  <t-list
    :list-data="listdata"
    :labels="labels"
    :link-func="link"
    :action="true"
    :edit-icon="editIcon"
    :delete-icon="deleteIcon"
    :edit-action="editItem"
    :delete-action="deleteItem"
    @pageHandle="pageHandle"
    :total="total"
  />
</template>
<script>
export default {
  data() {
    return {
      listdata: [],
      total: 0,
      editIcon: "edit",
      deleteIcon: "delete",
      labels: [
        {
          name: "名称",
          key: "a",
        },
        {
          name: "属性1",
          key: "b",
        },
        {
          name: "属性2",
          key: "c",
        },
        {
          name: "属性3",
          key: "d",
        },
      ],
    };
  },
  methods: {
    pageHandle(e) {
      // 请求数据
      let tbData = this.getTbData();
      this.total = tbData.length;
      this.listdata = tbData.slice(
        e.pageSize * (e.pageNo - 1),
        e.pageSize * e.pageNo
      );
    },
    getTbData() {
      let item = {
        a: "TComponent 泛型组件",
        b: 2,
        c: 3,
        d: 4,
        title: "很长的标题很长的标题",
      };
      let tbData = [];
      for (let i = 0; i < 20; i++) {
        tbData.push(item);
      }
      return tbData;
    },
    link(e) {
      console.log(e);
    },
    editItem(e) {
      console.log(e);
    },
    deleteItem(e) {
      console.log(e);
    },
  },
};
</script>