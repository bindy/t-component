### 基本用法
```vue

<t-row>
  <t-col :span="8">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="8">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="8">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
</t-row>

```

### 列元素之间增加间距
```vue

<t-row :gutter="20">
  <t-col :span="8">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="8">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="8">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
</t-row>

```

### 对齐方式
```vue

<t-row type="flex" class="row-bg" >
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
</t-row>

<t-row type="flex" class="row-bg"  justify="center">
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
</t-row>

<t-row type="flex" class="row-bg"  justify="end">
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
</t-row>

<t-row type="flex" class="row-bg"  justify="space-between">
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
</t-row>

<t-row type="flex" class="row-bg"  justify="space-around">
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
  <t-col :span="6">
    <div class="grid-content bg-purple-dark">span:8</div>
  </t-col>
</t-row>

```

### 移动端预览

```vue

<template>
    <iframe class="phone-frame" src="http://localhost:8080/#/row"></iframe>
</template>

```