<template>
  <div>
    <h3>基本用法</h3>
    <t-image src="https://img.yzcdn.cn/vant/cat.jpeg"/> 

    <h3>填充模式</h3>
    <t-image style="width:200px;height:200px" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg"/> 
    <t-image style="width:200px;height:200px" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg"/> 
    <t-image style="width:200px;height:200px" fit="fill" src="https://img.yzcdn.cn/vant/cat.jpeg"/> 

    <h3>图片懒加载</h3>
    <t-image lazy src="https://img.yzcdn.cn/vant/cat.jpeg"/> 
  </div>
</template>
<style>

</style>
