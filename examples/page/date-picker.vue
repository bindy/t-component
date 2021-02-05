<template>
  <div>
    <h3>基本用法</h3>
    <t-date-picker type="date" v-model="formDate" placeholder="请选择" />

    <h3>选择日期范围</h3>
    <t-date-picker type="daterange" v-model="formDate1" />

    <h3>只读模式</h3>
    <t-date-picker type="date" v-model="formDate2" readonly placeholder="请选择" />

    <h3>限制日期选择范围</h3>
    <t-date-picker type="date" v-model="formDate3" :min-date="minDate" :max-date="maxDate" />

  </div>
</template>
<script>
  export default {
    data() {
      return {
        formDate: undefined,
        formDate1: undefined,
        formDate2: '2020-10-1',
        formDate3: undefined,
        minDate:new Date('2020-10-1'),
        maxDate:new Date()
      }
    }
  };
</script>


