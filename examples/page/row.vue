<template>
  <div>
    <h3>基本用法</h3>
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

    <h3>列元素之间增加间距</h3>
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

    <h3>对齐方式</h3>
    <t-row type="flex" class="row-bg">
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

    <t-row type="flex" class="row-bg" justify="center">
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

    <t-row type="flex" class="row-bg" justify="end">
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

    <t-row type="flex" class="row-bg" justify="space-between">
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

    <t-row type="flex" class="row-bg" justify="space-around">
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
  </div>
</template>
<style>

</style>
