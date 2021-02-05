### 基本用法
```vue

<template>
  <t-radio-group v-model="formRadio"  :label-names="lValues" :label-texts="lTexts" />
</template>

<script>
  export default {
    data () {
      return {
        formRadio:1,
        lValues: [1, 2],
        lTexts: ['单选框1', '单选框2'],
      };
    }
  }
</script>

```

### 禁用状态
```vue

<template>
  <t-radio-group v-model="formRadio" disabled :label-names="lValues" :label-texts="lTexts" />
</template>

<script>
  export default {
    data () {
      return {
        formRadio:1,
        lValues: [1, 2],
        lTexts: ['单选框1', '单选框2'],
      };
    }
  }
</script>

```

### 样式
```vue

<template>
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

```

### 移动端预览

```vue

<template>
    <iframe class="phone-frame" src="http://localhost:8080/#/radioGroup"></iframe>
</template>


```