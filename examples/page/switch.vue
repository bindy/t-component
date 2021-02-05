<template>
  <div>
    <h3>基本用法</h3>
    <t-switch v-model="value"></t-switch>

    <h3>禁用状态</h3>
    <t-switch disabled v-model="value"></t-switch>

    <h3>更改样式</h3>
    <t-switch v-model="value" active-color="#f00" inactive-color="#000">></t-switch>

    <h3>扩展value</h3>
    <div>
      <t-switch v-model="value2" :active-value="100" :inactive-value="10">></t-switch>
      <p>当前值{{value2}}</p>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: true,
        value2: 100
      }
    }
  };
</script>


