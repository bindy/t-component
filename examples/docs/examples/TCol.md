### 基本用法
```vue

<t-row>
  <t-col :span="4">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="10" :offset="4">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
 
</t-row>

```

### 移动端预览

```vue

<template>
    <iframe class="phone-frame" src="http://localhost:8080/#/col"></iframe>
</template>

```