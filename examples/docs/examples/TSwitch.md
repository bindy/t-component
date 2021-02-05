### 基本用法
```vue
<template>
  <t-switch v-model="value"></t-switch>
</template>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>

```

### 禁用状态
```vue

<template>
  <t-switch v-model="value" disabled></t-switch>
</template>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>

```

### 更改样式
```vue

<template>
  <t-switch v-model="value" active-color="#f00" inactive-color="#000">></t-switch>
</template>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>

```

### 扩展value
```vue

<template>
<div>
  <t-switch v-model="value" :active-value="100" :inactive-value="10">></t-switch>
  <p>当前值{{value}}</p>
</div>
</template>

<script>
  export default {
    data() {
      return {
        value: 100
      }
    }
  };
</script>

```

### 移动端预览

```vue

<template>
    <iframe class="phone-frame" src="http://localhost:8080/#/switch"></iframe>
</template>

```