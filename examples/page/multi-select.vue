<template>
  <div>
    <h3>基本用法</h3>
    <t-multi-select v-model="formComp" :options="comps" />

    <h3>基本用法2</h3>
    <t-multi-select v-model="formComp2" :options="comps2" />

    <h3>禁用状态</h3>
    <t-multi-select disabled v-model="formComp3" :options="comps" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      formComp: [],
      formComp2: [],
      formComp3: [],
      comps: [
        {
          value: "shejiyuanze",
          label: "设计原则",
        },
        {
          value: "yizhi",
          label: "一致",
        },
        {
          value: "fankui",
          label: "反馈",
        },
        {
          value: "xiaolv",
          label: "效率",
        },
        {
          value: "kekong",
          label: "可控",
        },
      ],

      comps2: [
        {
          value: "shejiyuanze",
          label: "设计原则",
          children: [
            {
              value: "yizhi",
              label: "一致",
            },
            {
              value: "fankui",
              label: "反馈",
            },
            {
              value: "xiaolv",
              label: "效率",
            },
            {
              value: "kekong",
              label: "可控",
            },
          ],
        },
        {
          value: "daohang",
          label: "导航",
          children: [
            {
              value: "cexiangdaohang",
              label: "侧向导航",
            },
            {
              value: "dingbudaohang",
              label: "顶部导航",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style>
</style>
