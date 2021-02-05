### 基本用法
```vue
<template>
  <t-date-picker type="date" v-model="formDate" placeholder="请选择" />
</template>
<script>
 export default {
    data() {
      return {
        formDate: undefined
      }
    }
  };
</script>
```

### 选择日期范围
```vue
<template>
  <t-date-picker type="daterange" v-model="formDate" />
</template>
<script>
 export default {
    data() {
      return {
        formDate: undefined
      }
    }
  };
</script>
```

### 只读模式
```vue

<template>
  <t-date-picker type="date" v-model="formDate" readonly placeholder="请选择" />
</template>
<script>
 export default {
    data() {
      return {
        formDate: new Date()
      }
    }
  };
</script>

```

### 限制日期选择范围
```vue

<template>
  <t-date-picker type="date" v-model="formDate" :min-date="minDate" :max-date="maxDate" />
</template>
<script>
 export default {
    data() {
      return {
        formDate: undefined,
        minDate:new Date('2020-10-1'),
        maxDate:new Date()
      }
    }
  };
</script>

```

### 移动端预览

```vue

<template>
    <iframe class="phone-frame" src="https://bindy.github.io/t-component-ui-guide/site/#/datePicker"></iframe>
</template>

```