<template>
  <div>
    <h3>基本用法</h3>
    <t-radio-group v-model="formRadio"  :label-names="lValues" :label-texts="lTexts" />

    <h3>禁用状态</h3>
    <t-radio-group v-model="formRadio" disabled :label-names="lValues" :label-texts="lTexts" /> 

    <h3>样式</h3>
    <div>
      <div class="t-row ">
        <t-radio-group v-model="formRadio" size="medium" :label-names="lValues" :label-texts="lTexts" />
      </div>
      <div class="t-row ">
        <t-radio-group v-model="formRadio2" size="small" :label-names="lValues2" :label-texts="lTexts2" />
      </div>
      <div class="t-row ">
        <t-radio-group v-model="formRadio3" size="mini" :label-names="lValues3" :label-texts="lTexts3" />
      </div>
      <div class="t-row ">
        <!-- color PC下没有生效 -->
        <t-radio-group v-model="formRadio4" size="mini" color="#ff0000" :label-names="lValues4" :label-texts="lTexts4" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
      return {
        formRadio:1,
        lValues: [1, 2],
        lTexts: ['单选框1', '单选框2'],
        
        formRadio2:1,
        lValues2: [1, 2],
        lTexts2: ['单选框1', '单选框2'],
        formRadio3:1,
        lValues3: [1, 2],
        lTexts3: ['单选框1', '单选框2'],
        formRadio4:1,
        lValues4: [1, 2],
        lTexts4: ['单选框1', '单选框2'],
      };
    }
}
</script>
<style>

</style>
